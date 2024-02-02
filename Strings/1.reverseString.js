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
/*
Time Complexity:
The time complexity of the reverseString function is O(n), where n is the length of the input string.
 This is because the function iterates through each character in the input string exactly once, 
 and the number of iterations is directly proportional to the length of the string.

Space Complexity:
The space complexity is also O(n). In the optimized approach, we use an array (reversedArray) to store the reversed
 characters. The size of this array is equal to the length of the input string. Therefore, the space complexity is linear with respect to the size of the input.

Time Complexity: O(n)
Space Complexity: O(n)*/