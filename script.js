/****************** YOUR NAME: ONKAR SINGH

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName; //Variable to hold the model name 
let duration; //Variable to hold the duration


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

function recalculate() {
    // Variable to represent the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");

    // Check the value of the modelName variable and calculate the new total cost
    let totalCost;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    } else {
        totalCost = 0;
    }
    // Set the value of the calculated-cost element's innerHTML to the new total cost
    costLabel.innerHTML = totalCost.toFixed(2);
     
}


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

// Function called changeModel()
function changeModel() {
    // Variable to represent the model-text span element
    let modelText = document.getElementById("model-text");

    // Check value of the modelName variable and update accordingly
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost
    recalculate();
}

// Uncomment the following line to have this function run automatically whenever the pseudo-button is clicked
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

// Function called changeDuration()
function changeDuration() {
    // Variable to represent the duration-text span element
    let durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    let newDuration = prompt("Enter new duration in days:");

    // Validate if the input is a number
    if (!isNaN(newDuration)) {
        // Update the duration variable with the new value
        duration = parseInt(newDuration); // Convert to integer

        // Change the innerHTML of the duration-text span element to the new value
        durationText.innerHTML = duration;

        // Recalculate the total cost
        recalculate();
    } else {
        alert("Please enter a valid number for the duration.");
    }
}

// Attach the changeDuration function to the "Change Duration" pseudo-button
durationButton.addEventListener("click", changeDuration);