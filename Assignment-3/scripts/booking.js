/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Initialize variables when the page is loaded
var costPerDay = 50; // The cost per day for daycare services
var daysSelected = 0; // The number of days selected for booking
var totalCost = 0; // The total cost calculated based on days selected

// Elements on the screen that will be clicked or modified
var daySelectors = document.querySelectorAll('.day-selector li');
var fullDayButton = document.getElementById('full');
var halfDayButton = document.getElementById('half');
var calculatedCostElement = document.getElementById('calculated-cost');
var clearButton = document.getElementById('clear-button');

// Event listeners for day selectors
daySelectors.forEach(function(day) {
    day.addEventListener('click', function() {
        // Update daysSelected and totalCost
    });
});

// Event listener for full/half day buttons
fullDayButton.addEventListener('click', function() {
    // Update costPerDay and totalCost
});

halfDayButton.addEventListener('click', function() {
    // Update costPerDay and totalCost
});

// Event listener for the clear button
clearButton.addEventListener('click', function() {
    // Reset daysSelected and totalCost
    calculatedCostElement.textContent = '0';
});




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Assuming dayCounter is the variable that counts the number of days selected
var dayCounter = 0;

daySelectors.forEach(function(day) {
    day.addEventListener('click', function() {
        // Check if the day is already selected
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            dayCounter++; // Increment only if the day wasn't already selected
            // Recalculate the total cost
            totalCost = dayCounter * costPerDay;
            calculatedCostElement.textContent = totalCost.toString();
        } else {
            // If the day is already selected, remove the 'clicked' class and update the counter and cost
            day.classList.remove('clicked');
            dayCounter--;
            totalCost = dayCounter * costPerDay;
            calculatedCostElement.textContent = totalCost.toString();
        }
    });
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Event listener for the clear button
clearButton.addEventListener('click', function() {
    // Remove 'clicked' class from all selected days
    daySelectors.forEach(function(day) {
        day.classList.remove('clicked');
    });

    // Reset relevant variables
    dayCounter = 0;
    totalCost = 0;

    // Update the displayed cost
    calculatedCostElement.textContent = '0';
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Event listener for the half-day button
halfDayButton.addEventListener('click', function() {
    // Set the daily rate to $20
    costPerDay = 20;
    
    // Add the "clicked" class to the "half" element and remove it from the "full" element
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    
    // Recalculate the total cost
    totalCost = dayCounter * costPerDay;
    calculatedCostElement.textContent = totalCost.toString();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// Event listener for the full-day button
fullDayButton.addEventListener('click', function() {
    // Set the daily rate back to $35
    costPerDay = 35;
    
    // Add the "clicked" class to "full" and remove it from "half"
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    
    // Recalculate the total cost
    totalCost = dayCounter * costPerDay;
    calculatedCostElement.textContent = totalCost.toString();
});





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Function to recalculate the total cost
function recalculateTotalCost() {
    totalCost = dayCounter * costPerDay;
    calculatedCostElement.innerHTML = totalCost.toString();
}

// Call this function whenever a calculation is needed, such as after a day is selected or deselected, or when the rate changes