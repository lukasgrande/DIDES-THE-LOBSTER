let stage = 1;
let clickCount = 0;
let chosenAnimal = "";

const triangleContainer = document.getElementById("triangle-container");
const crossContainer = document.getElementById("cross-container");
const circleLeft = document.getElementById("circle-left");
const three = document.getElementById("three-container");
const threeThree = document.getElementById("threeThree-container");
const circleRight = document.getElementById("circle-right");
const two = document.getElementById("two-container");
const twoTwo = document.getElementById("twoTwo-container");
const circleMiddle = document.getElementById("circle-middle");
const one = document.getElementById("one-container");
const oneOne = document.getElementById("oneOne-container");
const flowContainer = document.getElementById("flow-container");
const abortContainer = document.getElementById("abort-container");
const lottieContainer = document.getElementById("lottie-container");
const lottiePlayer = document.getElementById("lottie-player");
const circleTaskOne = document.getElementById("circle-taskOne");
const lottieContainer2 = document.getElementById("lottie-container2");
const lottiePlayer2 = document.getElementById("lottie-player2");
const thirteen = document.getElementById("thirteen-container");
const nineteen = document.getElementById("nineteen-container");
const eighteen = document.getElementById("eighteen-container");
const sticker = document.getElementById("sticker");

const cowSound = new Audio("assets/audio/cow.mp3");
const pigSound = new Audio("assets/audio/pig.mp3");
const donkeySound = new Audio("assets/audio/donkey.mp3");
const task4 = new Audio("assets/audio/Awful.mp3");

function playCow() {
  cowSound.preload = "auto";
  cowSound.currentTime = 0; // Reset the audio to the beginning
  cowSound.play(); // Play the audio
}

function playPig() {
  pigSound.preload = "auto";
  pigSound.currentTime = 0; // Reset the audio to the beginning
  pigSound.play(); // Play the audio
}

function playDonkey() {
  donkeySound.preload = "auto";
  donkeySound.currentTime = 0; // Reset the audio to the beginning
  donkeySound.play(); // Play the audio
}

function playAwful() {
  task4.preload = "auto";
  task4.currentTime = 0; // Reset the audio to the beginning
  task4.play(); // Play the audio
}

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
      setTimeout(() => {
        crossContainer.style.opacity = "1";

        // Apply the hovered effect to trigger the background color change and scale
        crossContainer.classList.add("hovered");
        setTimeout(() => {
          // Remove the hovered effect after 2 seconds to reset the hover effect
          crossContainer.classList.remove("hovered");
        }, 1000); // Duration of the automatic hover effect
      }, 1500); // Match the opacity transition time
    }, 100); // Delay before showing the cross container
  });

  eighteen.addEventListener("click", function () {
    increaseStage();
  });
  nineteen.addEventListener("click", function () {
    if (stage == 6) {
      restartCountDotsScreen();
    } else {
      increaseStage();
    }
  });
  thirteen.addEventListener("click", function () {
    if (stage == 6) {
      restartCountDotsScreen();
    } else {
      increaseStage();
    }
  });
  one.addEventListener("click", function () {
    chosenAnimal = "donkey";
    increaseStage();
  });
  two.addEventListener("click", function () {
    chosenAnimal = "pig";
    increaseStage();
  });
  three.addEventListener("click", function () {
    chosenAnimal = "cow";
    increaseStage();
  });
  three.addEventListener("mouseenter", function () {
    playCow();
  });
  three.addEventListener("mouseleave", function () {
    cowSound.pause();
  });

  two.addEventListener("mouseenter", function () {
    playPig();
  });
  two.addEventListener("mouseleave", function () {
    pigSound.pause();
  });

  one.addEventListener("mouseenter", function () {
    playDonkey();
  });
  one.addEventListener("mouseleave", function () {
    donkeySound.pause();
  });

  oneOne.addEventListener("click", function () {
    circleLeft.classList.toggle("opacity-1");
    threeThree.classList.toggle("opacity-1");
    circleRight.classList.toggle("opacity-1");
    twoTwo.classList.toggle("opacity-1");

    oneOne.classList.toggle("opacity-1");
    setTimeout(() => {
      increaseStage();
    }, 4000);
  });

  twoTwo.addEventListener("click", function () {
    circleLeft.classList.toggle("opacity-1");
    threeThree.classList.toggle("opacity-1");
    oneOne.classList.toggle("opacity-1");
    circleMiddle.classList.toggle("opacity-1");

    circleRight.classList.toggle("opacity-1");
    twoTwo.classList.toggle("opacity-1");
    circleMiddle.classList.toggle("opacity-1");
    setTimeout(() => {
      increaseStage();
    }, 4000);
  });

  threeThree.addEventListener("click", function () {
    circleRight.classList.toggle("opacity-1");
    twoTwo.classList.toggle("opacity-1");
    oneOne.classList.toggle("opacity-1");
    circleMiddle.classList.toggle("opacity-1");

    circleLeft.classList.toggle("opacity-1");
    threeThree.classList.toggle("opacity-1");
    circleMiddle.classList.toggle("opacity-1");
    setTimeout(() => {
      increaseStage();
    }, 4000);
  });

  circleTaskOne.addEventListener("click", increaseSizeCircleClick);

  crossContainer.addEventListener("click", abortFlow);
});

function abortFlow() {
  sourceNode = null;
  audio.pause();
  explanationTaskOne.pause();
  explanationTaskTwo.pause();
  explanationTaskThree.pause();
  explanationTaskFour.pause();
  completionCow.pause();
  completionDonkey.pause();
  completionPig.pause();
  task4.pause();

  circleLeft.classList.remove("opacity-1");
  circleRight.classList.remove("opacity-1");
  circleTaskOne.classList.remove("opacity-1");

  one.classList.remove("opacity-1");
  two.classList.remove("opacity-1");
  three.classList.remove("opacity-1");
  lottieContainer.classList.remove("opacity-1");
  lottiePlayer.classList.remove("opacity-1");
  lottieContainer2.classList.remove("opacity-1");
  lottiePlayer2.classList.remove("opacity-1");
  oneOne.classList.remove("opacity-1");
  twoTwo.classList.remove("opacity-1");
  threeThree.classList.remove("opacity-1");
  thirteen.classList.remove("opacity-1");
  eighteen.classList.remove("opacity-1");
  nineteen.classList.remove("opacity-1");

  ///circle left and right to opacity 0 or / and remove opacity-1

  //toggle everything from the flow container with opacity 0
  isAborted = true;
  document.body.style = "background: white;";
  flowContainer.classList.toggle("opacity-0");
  abortContainer.classList.toggle("opacity-1");

  setTimeout(() => {
    sticker.classList.toggle("opacity-1");
  }, 23000);
  console.log("abort");
  setTimeout(() => {
    if (stage === 1) {
      loadHappyEnding();
      toggleHappyEnding();
    } else {
      loadHappyEnding();
      toggleHappyEnding();
    }
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 30000);
}

function chooseAnimal() {
  crossContainer.classList.toggle("moveDown");
  setTimeout(() => {
    if (!isAborted) {
      circleLeft.classList.toggle("opacity-1");
      three.classList.toggle("opacity-1");
    }
  }, 3000);

  setTimeout(() => {
    if (!isAborted) {
      circleRight.classList.toggle("opacity-1");
      two.classList.toggle("opacity-1");
    }
  }, 2000);

  setTimeout(() => {
    if (!isAborted) {
      one.classList.toggle("opacity-1");
    }
  }, 1000);
}

function explanationTaskOneScreen() {
  console.log("Explanation Task 1 for stage 3");
  circleLeft.classList.toggle("opacity-1");
  circleRight.classList.toggle("opacity-1");
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
});

explanationTaskFour.addEventListener("ended", function () {
  console.log("explanationTaskFour finished playing");
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
  setTimeout(() => {
    lottieContainer.classList.toggle("opacity-1");
    lottiePlayer.play();
  }, 1000);

  setTimeout(() => {
    if (!isAborted) {
      eighteen.classList.toggle("opacity-1");
      circleLeft.classList.toggle("opacity-1");
    }
  }, 27000);
  setTimeout(() => {
    if (!isAborted) {
      nineteen.classList.toggle("opacity-1");
      circleRight.classList.toggle("opacity-1");
    }
  }, 26000);
  setTimeout(() => {
    if (!isAborted) {
      thirteen.classList.toggle("opacity-1");
    }
  }, 25000);
}

function restartCountDotsScreen() {
  lottieContainer.classList.toggle("opacity-0");
  lottiePlayer.stop();
  lottiePlayer.play();

  setTimeout(() => {
    circleLeft.classList.toggle("opacity-1");
    eighteen.classList.toggle("opacity-1");
  }, 310);
  setTimeout(() => {
    circleRight.classList.toggle("opacity-1");
    nineteen.classList.toggle("opacity-1");
  }, 290);

  setTimeout(() => {
    thirteen.classList.toggle("opacity-1");
  }, 270);
  setTimeout(() => {
    if (!isAborted) {
      circleLeft.classList.toggle("opacity-1");
      eighteen.classList.toggle("opacity-1");
    }
  }, 27000);
  setTimeout(() => {
    if (!isAborted) {
      circleRight.classList.toggle("opacity-1");
      nineteen.classList.toggle("opacity-1");
    }
  }, 26000);

  setTimeout(() => {
    if (!isAborted) {
      thirteen.classList.toggle("opacity-1");
    }
  }, 25000);
}

function explanationTaskThreeScreen() {
  // Corrected function name
  // Implement logic to show another new content for stage 5
  console.log("Explanation Task 3 for stage 7");
  circleLeft.classList.toggle("opacity-1");
  circleRight.classList.toggle("opacity-1");
  thirteen.classList.toggle("opacity-1");
  eighteen.classList.toggle("opacity-1");
  nineteen.classList.toggle("opacity-1");
  crossContainer.classList.toggle("moveUp");
  crossContainer.classList.toggle("moveDown");
  setTimeout(() => {
    toggleExplanationTaskThree();
  }, 1000);
  //if (stage === 7) {
  setTimeout(() => {
    if (!isAborted) {
      circleLeft.classList.toggle("opacity-1");
      threeThree.classList.toggle("opacity-1");
    }
  }, 86000);
  setTimeout(() => {
    if (!isAborted) {
      circleRight.classList.toggle("opacity-1");
      twoTwo.classList.toggle("opacity-1");
    }
  }, 58000);
  setTimeout(() => {
    if (!isAborted) {
      oneOne.classList.toggle("opacity-1");
      allowUpdate = false;
    }
  }, 34000);
  setTimeout(() => {
    if (!isAborted) {
      crossContainer.classList.toggle("moveDown");
      crossContainer.classList.toggle("moveUp");
    }
  }, 32000);
  //}
}

function chooseDilemma() {
  increaseStage();
}

function explanationTaskFourScreen() {
  crossContainer.classList.toggle("moveUp");
  crossContainer.classList.toggle("moveDown");
  allowUpdate = true;

  setTimeout(() => {
    toggleExplanationTaskFour();
  }, 1000);
}

function goThroughIt() {
  crossContainer.classList.toggle("moveDown");
  crossContainer.classList.toggle("moveUp");
  circleMiddle.classList.toggle("opacity-0");
  setTimeout(() => {
    circleMiddle.classList.toggle("opacity-1");
  }, 1500);
  setTimeout(() => {
    lottieContainer2.classList.toggle("opacity-1");
    lottiePlayer2.play();
    playAwful();
  }, 2000);

  setTimeout(() => {
    lottiePlayer2.pause();
    increaseStage();
    crossContainer.classList.toggle("opacity-0");
  }, 132000);
}

function completionAudio() {
  lottieContainer2.classList.toggle("opacity-1");
  setTimeout(() => {
    circleMiddle.classList.toggle("opacity-1");
    circleMiddle.classList.toggle("opacity-0");
  }, 1000);

  setTimeout(() => {
    console.log("completionCow paused:", completionCow.paused);
    console.log(chosenAnimal, "selected");
    if (chosenAnimal === "cow") {
      console.log("user chose cow");
      togglecompletionCow();
    }
    if (chosenAnimal === "donkey") {
      console.log("user chose donkey");
      togglecompletionDonkey();
    }
    if (chosenAnimal === "pig") {
      console.log("user chose pig");
      togglecompletionPig();
    }
  }, 2000);
  setTimeout(() => {
    location.reload();
  }, 39000);
}

function reload() {
  location.reload();
}
