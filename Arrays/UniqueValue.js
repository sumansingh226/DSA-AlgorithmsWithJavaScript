function countUniqueValues(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return 0;
    }

    // Use two pointers approach
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        // If values at pointers are different, move the first pointer and update the value
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    // The count of unique values is the index of the first pointer + 1
    return i + 1;
}

// Test cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // Output: 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // Output: 7
console.log(countUniqueValues([])); // Output: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // Output: 4
