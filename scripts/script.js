/****************** YOUR NAME: ONKAR SINGH

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

// Variables to hold the values for modelName and duration
let modelName = 'Model XYZ'; // Default model name
let duration = 0; // Default duration in days


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

// Function to recalculates the total cost based on the model and duration //
function recalculate() {
    // Variable to represent the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
  
    // Variable to hold the new total cost
    let newTotalCost;
  
    // Check the value of the modelName variable to calculate the new total cost
    if (modelName === "Model XYZ") {
      newTotalCost = duration * 100;
    } else if (modelName === "Model CPRG") {
      newTotalCost = duration * 213;
    }
  
    // Set the value of the calculated-cost element's innerHTML to the new total cost
    costLabel.innerHTML = newTotalCost.toFixed(2); // Formats the cost to two decimal places
  }
  
  // Call the recalculate function to update the cost initially
  recalculate();
  

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE


// Variable to represent the "Switch Model" pseudo-button
let modelButton = document.getElementById("model-button");

// Function to change the model and recalculate the total cost
function changeModel() {
  // Variable to represent the model-text span element
  let modelText = document.getElementById("model-text");

  // Check the value of the modelName variable and update accordingly
  if (modelName === "Model XYZ") {
    modelName = "Model CPRG";
    modelText.innerHTML = "Model CPRG";
  } else if (modelName === "Model CPRG") {
    modelName = "Model XYZ";
    modelText.innerHTML = "Model XYZ";
  }

  // Recalculate the total cost after changing the model
  recalculate();
}

// Uncomment the following line to add the event listener to the model button
modelButton.addEventListener("click", changeModel);




/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

// Variable to represent the "Change Duration" pseudo-button
let durationButton = document.getElementById("duration-button");

// Function to change the duration and recalculate the total cost
function changeDuration() {
  // Variable to represent the duration-text span element
  let durationText = document.getElementById("duration-text");

  // Prompt the user for a new duration
  let newDuration = prompt("Please enter the new duration in days:");

  // Check if the prompt was cancelled or an empty string was entered
  if (newDuration === null || newDuration.trim() === "") {
    alert("You must enter a duration.");
    return; // Exit the function if no duration is entered
  }

  // Convert the input to a number and check if it's a valid number
  newDuration = Number(newDuration);
  if (isNaN(newDuration) || newDuration <= 0) {
    alert("Please enter a valid number greater than 0.");
    return; // Exit the function if the input is not a valid number
  }

  // Save the result of the prompt to the duration variable
  duration = newDuration;

  // Change the innerHTML of the duration-text span element to this new value
  durationText.innerHTML = duration;

  // Recalculate the total cost
  recalculate();
}

// Attach the changeDuration function to the "Change Duration" pseudo-button
durationButton.addEventListener("click", changeDuration);