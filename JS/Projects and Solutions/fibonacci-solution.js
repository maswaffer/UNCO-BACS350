// Prompt the user to enter the number of terms
const prompt = require('prompt-sync')();

let n = parseInt(prompt('Enter the number of terms: '), 10);

// Function to generate the Fibonacci sequence
function fibonacci(n) {
    let sequence = [];
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return sequence;
}

// Generate and display the Fibonacci sequence
console.log('Fibonacci sequence:');
console.log(fibonacci(n).join('\n'));
