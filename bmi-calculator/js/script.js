// This file contains the JavaScript logic for the BMI Calculator

// Function to validate the input form
function validateInput(weight, height) {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return false;
    }
    return true;
}

// Function to calculate BMI
function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    return weight / (height * height);
}

// Function to display the BMI result
function displayResult(bmi) {
    let resultText = "";
    if (bmi < 18.5) {
        resultText = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = "Overweight";
    } else {
        resultText = "Obesity";
    }
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(2)} (${resultText}).`;
}

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Validate the input
    if (validateInput(weight, height)) {
        // Calculate BMI
        const bmi = calculateBMI(weight, height);
        // Display the result
        displayResult(bmi);
    }
}

// Add event listener to the form
document.getElementById("bmiForm").addEventListener("submit", handleFormSubmit);