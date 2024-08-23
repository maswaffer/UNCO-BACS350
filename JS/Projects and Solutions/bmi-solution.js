// Prompt the user to enter their weight and height
const prompt = require('prompt-sync')();

let weight = parseFloat(prompt('Enter your weight in kilograms: '));
let height = parseFloat(prompt('Enter your height in meters: '));

// Calculate BMI
let bmi = weight / (height * height);

// Determine the BMI category
let category;
if (bmi < 18.5) {
    category = 'Underweight';
} else if (bmi < 25) {
    category = 'Normal weight';
} else if (bmi < 30) {
    category = 'Overweight';
} else {
    category = 'Obese';
}

// Output the result
console.log(`Your BMI is ${bmi.toFixed(2)} - ${category}`);
