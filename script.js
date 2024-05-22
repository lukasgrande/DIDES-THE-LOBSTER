let stage = 1;

const triangleContainer = document.getElementById("triangle-container");
const crossContainer = document.getElementById("cross-container");
const circleLeft = document.getElementById("circle-left");
const circleRight = document.getElementById("circle-right");
const flowContainer = document.getElementById("flow-container");
const abortContainer = document.getElementById("abort-container");

function increaseStage() {
  stage++;
  console.log("Stage:", stage);

  // Trigger conditional rendering based on stage
  if (stage === 2) {
    showNewContent();
  } else if (stage === 3) {
    showAnotherContent();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  triangleContainer.addEventListener("click", function() {
    // Hide the triangle container
    triangleContainer.style.opacity = '0';
    setTimeout(() => {
      triangleContainer.style.display = 'none';

      // Show the new element (cross)
      crossContainer.style.display = 'block';
      crossContainer.style.opacity = '1';
    }, 300); // Duration should match the CSS transition time
  });
  crossContainer.addEventListener("click", abortFlow)

});

function abortFlow() {
  flowContainer.classList.toggle("opacity-0");
  abortContainer.classList.toggle("opacity-1")
  console.log('abort')
}

function showNewContent() {
  // Implement logic to show new content for stage 2
  console.log("Showing new content for stage 2");
  //add a new css class to crossContainer
  crossContainer.classList.toggle("moveDown");
  circleLeft.classList.toggle("opacity-0")
  circleRight.classList.toggle("opacity-0")
}

function showAnotherContent() {
  // Implement logic to show another new content for stage 3
  console.log("Showing another content for stage 3");
}

// Handle audio end to increase stage
audio.addEventListener("ended", increaseStage);
