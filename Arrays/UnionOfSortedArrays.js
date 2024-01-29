function findUnion(arr1, arr2) {
    const union = [];
    let i = 0;
    let j = 0;

    // Iterate through both arrays simultaneously
    while (i < arr1.length && j < arr2.length) {
        // If the current elements are equal, add one of them to the union and move both pointers
        if (arr1[i] === arr2[j]) {
            union.push(arr1[i]);
            i++;
            j++;
        }
        // If arr1[i] is smaller, add it to the union and move the pointer
        else if (arr1[i] < arr2[j]) {
            union.push(arr1[i]);
            i++;
        }
        // If arr2[j] is smaller, add it to the union and move the pointer
        else {
            union.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        union.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        union.push(arr2[j]);
        j++;
    }

    return union;
}

// Example usage:
const arr1 = [1, 3, 4, 5, 7];
const arr2 = [2, 3, 5, 6];
const union = findUnion(arr1, arr2);
console.log(union); // Output: [1, 2, 3, 4, 5, 6, 7]
