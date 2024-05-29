let stage = 1;
let clickCount = 0;

const triangleContainer = document.getElementById("triangle-container");
const crossContainer = document.getElementById("cross-container");
const circleLeft = document.getElementById("circle-left");
const three = document.getElementById("three-container");
const circleRight = document.getElementById("circle-right");
const two = document.getElementById("two-container");
const circleMiddle = document.getElementById("circle-middle");
const one = document.getElementById("one-container");
const flowContainer = document.getElementById("flow-container");
const abortContainer = document.getElementById("abort-container");
const lottieContainer = document.getElementById("lottie-container");
const lottiePlayer = document.getElementById("lottie-player");
const circleTaskOne = document.getElementById("circle-taskOne");
const lottieContainer2 = document.getElementById("lottie-container2");
const lottiePlayer2 = document.getElementById("lottie-player2");

function increaseStage() {
  stage++;
  console.log("Stage:", stage);
  running = false;
  sourceNode = null;

  // Trigger conditional rendering based on stage
  if (stage === 2) {
    chooseAnimal();
  } else if (stage === 3) {
    explanationTaskOneScreen();
  } else if (stage === 4) {
    taskOne();
  } else if (stage === 5) {
    explanationTaskTwoScreen();
  } else if (stage === 6) {
    countDotsScreen();
  } else if (stage === 7) {
    explanationTaskThreeScreen();
  } else if (stage === 8) {
    chooseDilemma();
  } else if (stage === 9) {
    explanationTaskFourScreen();
  } else if (stage === 10) {
    goThroughIt();
  } else if (stage === 11) {
    completionAudio();
  } else if (stage === 12) {
    reload();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  triangleContainer.addEventListener("click", function () {
    // Hide the triangle container
    triangleContainer.style.opacity = "0";
    setTimeout(() => {
      triangleContainer.style.display = "none";

      // Show the new element (cross)
      crossContainer.style.display = "block";
      crossContainer.style.opacity = "1";
    }, 400); // Duration should match the CSS transition time
  });

  circleLeft.addEventListener("click", function () {
    increaseStage();
  });
  circleRight.addEventListener("click", function () {
    increaseStage();
  });
  circleMiddle.addEventListener("click", function () {
    increaseStage();
  });
  one.addEventListener("click", function () {
    increaseStage();
  });
  two.addEventListener("click", function () {
    increaseStage();
  });
  three.addEventListener("click", function () {
    increaseStage();
  });

  circleTaskOne.addEventListener("click", increaseSizeCircleClick);

  crossContainer.addEventListener("click", abortFlow);
});

function abortFlow() {
  //toggle everything from the flow container with opacity 0
  flowContainer.classList.toggle("opacity-0");
  abortContainer.classList.toggle("opacity-1");

  console.log("abort");
}

function chooseAnimal() {
  // Implement logic to show new content for stage 2
  console.log("Choose Animal Screen for stage 2");
  //add a new css class to crossContainer
  crossContainer.classList.toggle("moveDown");
  setTimeout(() => {
    circleLeft.classList.toggle("opacity-1");
    three.classList.toggle("opacity-1");
  }, 5000);

  setTimeout(() => {
    circleRight.classList.toggle("opacity-1");
    two.classList.toggle("opacity-1");
  }, 3000);

  setTimeout(() => {
    circleMiddle.classList.toggle("opacity-1");
    one.classList.toggle("opacity-1");
  }, 1000);
}

function explanationTaskOneScreen() {
  // Corrected function name
  // Implement logic to show another new content for stage 3
  console.log("Explanation Task 1 for stage 3");
  circleLeft.classList.toggle("opacity-1");
  circleRight.classList.toggle("opacity-1");
  circleMiddle.classList.toggle("opacity-1");
  one.classList.toggle("opacity-1");
  two.classList.toggle("opacity-1");
  three.classList.toggle("opacity-1");
  crossContainer.classList.toggle("moveUp");
  crossContainer.classList.toggle("moveDown");
  setTimeout(() => {
    toggleExplanationTaskOne();
  }, 1000);
}

function taskOne() {
  crossContainer.classList.toggle("moveDown");
  crossContainer.classList.toggle("moveUp");
  circleTaskOne.classList.toggle("opacity-1");
  flowContainer.appendChild(circleTaskOne);
}

// Handle audio end to increase stage
audio.addEventListener("ended", increaseStage);

// Check if Event Listener is set up
explanationTaskOne.addEventListener("ended", function () {
  console.log("explanationTaskOne finished playing");
  increaseStage(); // Check if increaseStage is called
});
explanationTaskTwo.addEventListener("ended", function () {
  console.log("explanationTaskTwo finished playing");
  increaseStage(); // Check if increaseStage is called
});

explanationTaskThree.addEventListener("ended", function () {
  console.log("explanationTaskThree finished playing");
  increaseStage();
});

explanationTaskFour.addEventListener("ended", function () {
  console.log("explanationTaskFour finished playing");
  increaseStage();
});

completion.addEventListener("ended", function () {
  console.log("completion finished playing");
  increaseStage();
});

// Check for any errors during audio loading
explanationTaskOne.addEventListener("error", function (event) {
  console.error("Error loading audio:", event);
});

function increaseSizeCircleClick() {
  clickCount++; // Increment the click count

  // Calculate the new size (increase by 50% each click)
  const currentWidth = parseFloat(getComputedStyle(circleTaskOne).width);
  const newSize = currentWidth * 1.5; // Increase by 50%
  circleTaskOne.style.width = newSize + "px";
  circleTaskOne.style.height = newSize + "px"; // Ensure it remains a circle

  // Check if the click count reaches the limit (3 clicks)
  if (clickCount === 3) {
    // Animate to cover the whole screen
    circleTaskOne.style.transition =
      "width 1s ease-in-out, height 1s ease-in-out, opacity 1s ease-in-out";
    circleTaskOne.style.width = "150vw";
    circleTaskOne.style.height = "150vh";
    circleTaskOne.style.opacity = "0";

    // After the animation completes, increase the stage and reset
    setTimeout(() => {
      increaseStage();
      circleTaskOne.classList.remove("opacity-1");
      clickCount = 0; // Reset click count for future use
    }, 1000); // Match this duration with the CSS transition duration
  }
}

function explanationTaskTwoScreen() {
  // Corrected function name
  // Implement logic to show another new content for stage 5
  console.log("Explanation Task 2 for stage 5");
  crossContainer.classList.toggle("moveUp");
  crossContainer.classList.toggle("moveDown");
  setTimeout(() => {
    toggleExplanationTaskTwo();
  }, 1000);
}

function countDotsScreen() {
  crossContainer.classList.toggle("moveDown");
  crossContainer.classList.toggle("moveUp");
  lottieContainer.classList.toggle("opacity-1");
  lottiePlayer.play();

  setTimeout(() => {
    circleLeft.classList.toggle("opacity-1");
  }, 31000);
  setTimeout(() => {
    circleRight.classList.toggle("opacity-1");
  }, 29000);

  setTimeout(() => {
    circleMiddle.classList.toggle("opacity-1");
  }, 27000);
}
function explanationTaskThreeScreen() {
  // Corrected function name
  // Implement logic to show another new content for stage 5
  console.log("Explanation Task 3 for stage 7");
  circleLeft.classList.toggle("opacity-1");
  circleRight.classList.toggle("opacity-1");
  circleMiddle.classList.toggle("opacity-1");
  crossContainer.classList.toggle("moveUp");
  crossContainer.classList.toggle("moveDown");
  setTimeout(() => {
    toggleExplanationTaskThree();
  }, 1000);
}

function chooseDilemma() {
  crossContainer.classList.toggle("moveDown");
  crossContainer.classList.toggle("moveUp");
  setTimeout(() => {
    circleLeft.classList.toggle("opacity-1");
  }, 5000);
  setTimeout(() => {
    circleRight.classList.toggle("opacity-1");
  }, 3000);

  setTimeout(() => {
    circleMiddle.classList.toggle("opacity-1");
  }, 1000);
}

function explanationTaskFourScreen() {
  crossContainer.classList.toggle("moveUp");
  crossContainer.classList.toggle("moveDown");
  circleLeft.classList.toggle("opacity-1");
  circleRight.classList.toggle("opacity-1");
  circleMiddle.classList.toggle("opacity-1");
  setTimeout(() => {
    toggleExplanationTaskFour();
  }, 1000);
}

function goThroughIt() {
  crossContainer.classList.toggle("moveDown");
  crossContainer.classList.toggle("moveUp");
  lottieContainer2.classList.toggle("opacity-1");
  lottiePlayer2.play();
  setTimeout(() => {
    increaseStage();
  }, 5000);
}

function completionAudio() {
  crossContainer.classList.toggle("moveUp");
  crossContainer.classList.toggle("moveDown");
  setTimeout(() => {
    toggleCompletion();
  }, 1000);
}

function reload() {
  location.reload();
}
