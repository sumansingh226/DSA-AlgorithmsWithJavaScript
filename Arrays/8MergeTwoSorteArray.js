// Merge two sorted arrays

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Push remaining elements of arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Push remaining elements of arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const arr1 = [2, 4, 6, 8];
const arr2 = [1, 3, 5, 7];
console.log(mergeSortedArrays(arr1, arr2));

