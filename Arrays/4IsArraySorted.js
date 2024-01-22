function isSorted(arr) {
    const n = arr.length;

    if (n <= 0) {
        return `${arr} is Emty  array`;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return `${arr} is not a soted array`;
    }

    return `${arr} is  a soted array`;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 2, 8, 1, 3];

console.log(isSorted(arr1)); // Output: true
console.log(isSorted(arr2)); // Output: false
