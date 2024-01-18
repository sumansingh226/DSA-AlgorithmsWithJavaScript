// Write a function to reverse a string.

function reverseString(inputString) {
    const reversedArray = [];
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedArray.push(inputString[i]);
    }
    return reversedArray.join("");
}

// Example usage:
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
