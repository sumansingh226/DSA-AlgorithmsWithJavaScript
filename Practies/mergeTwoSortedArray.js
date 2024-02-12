function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            mergedArray.push(arr1[pointer1]);
            pointer1++;
        } else {
            mergedArray.push(arr2[pointer2]);
            pointer2++;
        }
    }

    while (pointer1 < arr1.length) {
        mergedArray.push(arr1[pointer1]);
        pointer1++;
    }

    while (pointer2 < arr2.length) {
        mergedArray.push(arr2[pointer2]);
        pointer2++;
    }

    return mergedArray;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrays(arr1, arr2)); 
