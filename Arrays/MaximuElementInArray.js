// 1. **Find the maximum element in an array.**

function findMaxElement(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array case
    }

    let maxElement = arr[0];

    for (const element of arr) {
        if (element > maxElement) {
            maxElement = element;
        }
    }

    return maxElement;
}

// Example usage:
const myArray = [3, 7, 1, 9, 4, 6];
const result = findMaxElement(myArray);
console.log("Maximum element in the array:", result);
