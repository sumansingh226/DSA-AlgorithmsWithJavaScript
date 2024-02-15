//merged two sorted arrays 

const mergeSortedArrays = (arr1, arr2) => {
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

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const arr1 = [5, 6, 9, 12];
const arr2 = [2, 4, 6, 8];
console.log("array 1", arr1);
console.log("array 2", arr2);
console.log("merged sorted array", mergeSortedArrays(arr1, arr2)); 
