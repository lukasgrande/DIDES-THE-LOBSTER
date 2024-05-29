let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let playButton = document.getElementById("triangle-container");

// Set the canvas to the correct size for the display
function resizeCanvas() {
  let ratio = window.devicePixelRatio || 1;
  canvas.width = document.body.clientWidth * ratio;
  canvas.height = document.body.clientHeight * ratio;
  canvas.style.width = `${document.body.clientWidth}px`;
  canvas.style.height = `${document.body.clientHeight}px`;
  ctx.scale(ratio, ratio);
}

resizeCanvas();

let centerX = canvas.width / 2 / (window.devicePixelRatio || 1);
let centerY = canvas.height / 2 / (window.devicePixelRatio || 1);
let radius = document.body.clientWidth * 0.138;
let steps = document.body.clientWidth <= 425 ? 60 : 120;
let interval = 360 / steps;
let pointsUp = [];
let pointsDown = [];
let running = false;
let pCircle = 2 * Math.PI * radius;
let angleExtra = 90;

function initializePoints() {
  pointsUp = [];
  pointsDown = [];

  for (let angle = 0; angle < 360; angle += interval) {
    let distUp = 0.9;
    let distDown = 0.0;

    pointsUp.push({
      angle: angle + angleExtra,
      x:
        centerX +
        radius * Math.cos(((-angle + angleExtra) * Math.PI) / 180) * distUp,
      y:
        centerY +
        radius * Math.sin(((-angle + angleExtra) * Math.PI) / 180) * distUp,
      dist: distUp,
    });

    pointsDown.push({
      angle: angle + angleExtra + 5,
      x:
        centerX +
        radius *
          Math.cos(((-angle + angleExtra + 5) * Math.PI) / 180) *
          distDown,
      y:
        centerY +
        radius *
          Math.sin(((-angle + angleExtra + 5) * Math.PI) / 180) *
          distDown,
      dist: distDown,
    });
  }
}

initializePoints();

// -------------
// Audio stuff
// -------------

let context;
let analyserL, analyserR;
let splitter;
let audioDataArrayL, audioDataArrayR;
let bufferLengthL, bufferLengthR;
let sourceNode = null; // Store the reference to the MediaElementSourceNode

function initializeAudio() {
  context = new (window.AudioContext || window.webkitAudioContext)();
  splitter = context.createChannelSplitter();

  analyserL = context.createAnalyser();
  analyserL.fftSize = 8192;

  analyserR = context.createAnalyser();
  analyserR.fftSize = 8192;

  splitter.connect(analyserL, 0, 0);
  splitter.connect(analyserR, 1, 0);

  bufferLengthL = analyserL.frequencyBinCount;
  audioDataArrayL = new Uint8Array(bufferLengthL);

  bufferLengthR = analyserR.frequencyBinCount;
  audioDataArrayR = new Uint8Array(bufferLengthR);
}

const audio = new Audio();
const explanationTaskOne = new Audio();
const explanationTaskTwo = new Audio();
const explanationTaskThree = new Audio();
const explanationTaskFour = new Audio();
const completion = new Audio();

function loadAudio() {
  audio.loop = false;
  audio.autoplay = false;
  audio.crossOrigin = "anonymous";

  // call `handleCanplay` when music can be played
  audio.addEventListener("canplay", handleCanplay);
  // Change the URL here accordingly
  audio.src = "assets/audio/testaudio.mp3"; // Local sound file
  audio.load();
  running = true;
}

function loadExplanationTaskOne() {
  console.log("Loading explanationTaskOne audio...");
  // Rest of the function code

  explanationTaskOne.loop = false;
  explanationTaskOne.autoplay = false;
  explanationTaskOne.crossOrigin = "anonymous";
  explanationTaskOne.addEventListener("canplay", handleCanplay2);
  explanationTaskOne.addEventListener("error", handleAudioError); // Add error event listener
  explanationTaskOne.src = "assets/audio/testaudio.mp3"; // Local sound file for the second audio
  explanationTaskOne.load();
  running = true;
}

function loadExplanationTaskTwo() {
  console.log("Loading explanationTaskTwo audio...");
  // Rest of the function code

  explanationTaskTwo.loop = false;
  explanationTaskTwo.autoplay = false;
  explanationTaskTwo.crossOrigin = "anonymous";
  explanationTaskTwo.addEventListener("canplay", handleCanplay3);
  explanationTaskTwo.addEventListener("error", handleAudioError); // Add error event listener
  explanationTaskTwo.src = "assets/audio/testaudio.mp3"; // Local sound file for the second audio
  explanationTaskTwo.load();
  running = true;
}

function loadExplanationTaskThree() {
  console.log("Loading explanationTaskThree audio...");
  // Rest of the function code

  explanationTaskThree.loop = false;
  explanationTaskThree.autoplay = false;
  explanationTaskThree.crossOrigin = "anonymous";
  explanationTaskThree.addEventListener("canplay", handleCanplay4);
  explanationTaskThree.addEventListener("error", handleAudioError);
  explanationTaskThree.src = "assets/audio/testaudio.mp3";
  explanationTaskThree.load();
  running = true;
}

function loadExplanationTaskFour() {
  console.log("Loading explanationTaskFour audio...");
  // Rest of the function code

  explanationTaskFour.loop = false;
  explanationTaskFour.autoplay = false;
  explanationTaskFour.crossOrigin = "anonymous";
  explanationTaskFour.addEventListener("canplay", handleCanplay5);
  explanationTaskFour.addEventListener("error", handleAudioError);
  explanationTaskFour.src = "assets/audio/testaudio.mp3";
  explanationTaskFour.load();
  running = true;
}
function loadCompletion() {
  console.log("Loading completion audio...");
  completion.loop = false;
  completion.autoplay = false;
  completion.crossOrigin = "anonymous";
  completion.addEventListener("canplay", handleCanplay6);
  completion.addEventListener("error", handleAudioError);
  completion.src = "assets/audio/testaudio.mp3";
  completion.load();
  running = true;
}

function handleAudioError(error) {
  console.error("Error loading audio:", error);
}
audio.addEventListener("error", handleAudioError);
explanationTaskOne.addEventListener("error", handleAudioError);

function handleCanplay() {
  // Check if the sourceNode is already created
  if (!sourceNode) {
    // connect the audio element to the analyser node and the analyser node
    sourceNode = context.createMediaElementSource(audio);
    sourceNode.connect(splitter);
    splitter.connect(context.destination);
  }
}

function handleCanplay2() {
  // Function to handle canplay event for the second audio
  if (!sourceNode) {
    sourceNode = context.createMediaElementSource(explanationTaskOne);
    sourceNode.connect(splitter);
    splitter.connect(context.destination);
  }
}

function handleCanplay3() {
  if (!sourceNode) {
    sourceNode = context.createMediaElementSource(explanationTaskTwo);
    sourceNode.connect(splitter);
    splitter.connect(context.destination);
  }
}

function handleCanplay4() {
  if (!sourceNode) {
    sourceNode = context.createMediaElementSource(explanationTaskThree);
    sourceNode.connect(splitter);
    splitter.connect(context.destination);
  }
}

function handleCanplay5() {
  if (!sourceNode) {
    sourceNode = context.createMediaElementSource(explanationTaskFour);
    sourceNode.connect(splitter);
    splitter.connect(context.destination);
  }
}
function handleCanplay6() {
  if (!sourceNode) {
    sourceNode = context.createMediaElementSource(completion);
    sourceNode.connect(splitter);
    splitter.connect(context.destination);
  }
}

function toggleAudio() {
  console.log("play clicked");
  if (!running) {
    initializeAudio(); // Ensure audio context is initialized after user gesture
    loadAudio();
  }

  if (audio.paused) {
    context.resume().then(() => {
      audio.play();
    });
  } else {
    audio.pause();
  }
}

function toggleExplanationTaskOne() {
  // Function to toggle the second audio
  console.log("play2 clicked");
  // TODO: actually set running to false(otherwise it will always be true)
  if (!running) {
    initializeAudio();
    loadExplanationTaskOne();
  }

  console.log("ExplanationTaskOne paused:", explanationTaskOne.paused);

  if (explanationTaskOne.paused) {
    context.resume().then(() => {
      explanationTaskOne.play();
      console.log("ExplanationTaskOne started playing");
    });
  } else {
    explanationTaskOne.pause();
  }
}

function toggleExplanationTaskTwo() {
  console.log("play3 clicked");
  if (!running) {
    initializeAudio();
    loadExplanationTaskTwo();
  }

  console.log("ExplanationTaskTwo paused:", explanationTaskTwo.paused);

  if (explanationTaskTwo.paused) {
    context.resume().then(() => {
      explanationTaskTwo.play();
      console.log("ExplanationTaskTwo started playing");
    });
  } else {
    explanationTaskTwo.pause();
  }
}

function toggleExplanationTaskThree() {
  console.log("play4 clicked");
  if (!running) {
    initializeAudio();
    loadExplanationTaskThree();
  }

  console.log("ExplanationTaskThree paused:", explanationTaskThree.paused);

  if (explanationTaskThree.paused) {
    context.resume().then(() => {
      explanationTaskThree.play();
      console.log("ExplanationTaskThree started playing");
    });
  } else {
    explanationTaskThree.pause();
  }
}

function toggleExplanationTaskFour() {
  console.log("play5 clicked");
  if (!running) {
    initializeAudio();
    loadExplanationTaskFour();
  }

  console.log("ExplanationTaskFour paused:", explanationTaskFour.paused);

  if (explanationTaskFour.paused) {
    context.resume().then(() => {
      explanationTaskFour.play();
      console.log("ExplanationTaskFour started playing");
    });
  } else {
    explanationTaskFour.pause();
  }
}
function toggleCompletion() {
  console.log("play6 clicked");
  if (!running) {
    initializeAudio();
    loadCompletion();
  }

  console.log("Completion paused:", completion.paused);

  if (completion.paused) {
    context.resume().then(() => {
      completion.play();
      console.log("completion started playing");
    });
  } else {
    completion.pause();
  }
}

playButton.addEventListener("click", toggleAudio);

document.body.addEventListener("touchend", function (ev) {
  if (context && context.state === "suspended") {
    context.resume();
  }
});

// -------------
// Canvas stuff
// -------------

function drawLine(points) {
  let origin = points[0];

  ctx.beginPath();
  ctx.strokeStyle = "rgba(255,255,255,1)";
  ctx.lineJoin = "round";
  ctx.lineWidth = 2; // Adjust the thickness here
  ctx.moveTo(origin.x, origin.y);

  for (let i = 0; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }

  ctx.lineTo(origin.x, origin.y);
  ctx.stroke();
}

function update(dt) {
  let audioIndex, audioValue;

  // get the current audio data
  analyserL.getByteFrequencyData(audioDataArrayL);
  analyserR.getByteFrequencyData(audioDataArrayR);

  for (let i = 0; i < pointsUp.length; i++) {
    audioIndex =
      Math.ceil(pointsUp[i].angle * (bufferLengthL / (pCircle * 2))) | 0;
    // get the audio data and make it go from 0 to 1
    audioValue = audioDataArrayL[audioIndex] / 255;

    pointsUp[i].dist = 0.9 + audioValue * 0.5;
    pointsUp[i].x =
      centerX +
      radius *
        Math.cos((-pointsUp[i].angle * Math.PI) / 180) *
        pointsUp[i].dist;
    pointsUp[i].y =
      centerY +
      radius *
        Math.sin((-pointsUp[i].angle * Math.PI) / 180) *
        pointsUp[i].dist;

    audioIndex =
      Math.ceil(pointsDown[i].angle * (bufferLengthR / (pCircle * 2))) | 0;
    // get the audio data and make it go from 0 to 1
    audioValue = audioDataArrayR[audioIndex] / 255;

    pointsDown[i].dist = 0.0 + audioValue * 0.2;
    pointsDown[i].x =
      centerX +
      radius *
        Math.cos((-pointsDown[i].angle * Math.PI) / 180) *
        pointsDown[i].dist;
    pointsDown[i].y =
      centerY +
      radius *
        Math.sin((-pointsDown[i].angle * Math.PI) / 180) *
        pointsDown[i].dist;
  }
}

function draw(dt) {
  requestAnimationFrame(draw);

  if (running) {
    update(dt);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawLine(pointsUp);
  drawLine(pointsDown);
}

draw();

// Redraw on resize
window.addEventListener("resize", () => {
  resizeCanvas();
  initializePoints();
  draw();
});
