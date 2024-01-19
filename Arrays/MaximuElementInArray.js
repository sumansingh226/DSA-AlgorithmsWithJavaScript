// 1. **Find the maximum element in an array.**

function findMaxElement(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array case
    }

    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}

// Example usage:
const myArray = [3, 7, 1, 9, 4, 6];
const result = findMaxElement(myArray);
console.log("Maximum element in the array:", result);
