// Recursive function to check if a number is even
function isEven(n) {
    if (n < 0) {
        n = Math.abs(n); // Handle negative numbers
    }
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}

// Test cases
console.log(isEven(50));  // → true
console.log(isEven(75));  // → false
console.log(isEven(-1));  // → false
console.log(isEven(-2));  // → true
