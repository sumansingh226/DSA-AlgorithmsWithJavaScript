// Given an array of numbers, find the maximum element.

function findMax(arr, start, end) {
    if (start === end) {
        return arr[start];
    }

    const mid = Math.floor((start + end) / 2);

    const maxLeft = findMax(arr, start, mid);
    const maxRight = findMax(arr, mid + 1, end);

    return Math.max(maxLeft, maxRight);
}

// Example usage
const array = [3, 7, 1, 9, 5, 2, 8, 4];
const maxElement = findMax(array, 0, array.length - 1);
console.log("Maximum element:", maxElement);