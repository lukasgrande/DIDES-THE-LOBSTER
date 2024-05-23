let stage = 1;

const triangleContainer = document.getElementById("triangle-container");
const crossContainer = document.getElementById("cross-container");
const circleLeft = document.getElementById("circle-left");
const circleRight = document.getElementById("circle-right");
const circleMiddle = document.getElementById("circle-middle");
const flowContainer = document.getElementById("flow-container");
const abortContainer = document.getElementById("abort-container");

function increaseStage() {
  stage++;
  console.log("Stage:", stage);

  // Trigger conditional rendering based on stage
  if (stage === 2) {
    chooseAnimal();
  } else if (stage === 3) {
    taskOneScreen(); 
  }
  else if (stage === 4) {
    newStage(); 
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
  
  circleLeft.addEventListener("click", function() {
    taskOneScreen(); 
    
  });
  circleRight.addEventListener("click", function() {
    taskOneScreen(); 
    
  });
  circleMiddle.addEventListener("click", function() {
    taskOneScreen(); 
    
  });

  crossContainer.addEventListener("click", abortFlow);
});

function abortFlow() {
  //toggle everything from the flow container with opacity 0
  flowContainer.classList.toggle("opacity-0");
  abortContainer.classList.toggle("opacity-1")
  console.log('abort')
}

function chooseAnimal() {
  // Implement logic to show new content for stage 2
  console.log("Choose Animal Screen for stage 2");
  //add a new css class to crossContainer
  crossContainer.classList.toggle("moveDown");
  circleLeft.classList.toggle("opacity-1")
  circleRight.classList.toggle("opacity-1")
  circleMiddle.classList.toggle("opacity-1")
}

function taskOneScreen() { // Corrected function name
  // Implement logic to show another new content for stage 3
  console.log("Explanation Task 1 for stage 3");
  circleLeft.classList.toggle("opacity-1")
  circleRight.classList.toggle("opacity-1")
  circleMiddle.classList.toggle("opacity-1")
  crossContainer.classList.toggle("moveUp");
  toggleExplanationTaskOne();
}

function newStage() { // Corrected function name
  // Implement logic to show another new content for stage 4
  
}

// Handle audio end to increase stage
audio.addEventListener("ended", increaseStage);

// Check if Event Listener is set up
explanationTaskOne.addEventListener("ended", function() {
  console.log("explanationTaskOne finished playing");
  increaseStage(); // Check if increaseStage is called
});

// Check for any errors during audio loading
explanationTaskOne.addEventListener("error", function(event) {
  console.error("Error loading audio:", event);
});

