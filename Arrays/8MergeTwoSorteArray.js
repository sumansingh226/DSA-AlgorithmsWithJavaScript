// Merge two sorted arrays

function mergeTwoSortedArray(arr1, arr2) {
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


    return mergedArray;
}


const sortedArray1 = [1, 2, 3, 4, 5];
const sortedArray2 = [6, 7, 8, 9, 10];
mergeTwoSortedArray()