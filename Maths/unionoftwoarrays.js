//union of two arrays in js
function mergeArrays(arr1, arr2) {
    let pointer1 = 0;
    let pointer2 = 0;
    const merged = [];

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            merged.push(arr1[pointer1]);
            pointer1++;
        } else {
            merged.push(arr2[pointer2]);
            pointer2++;
        }
    }

    while (pointer1 < arr1.length) {
        merged.push(arr1[pointer1]);
        pointer1++;
    }

    while (pointer2 < arr2.length) {
        merged.push(arr2[pointer2]);
        pointer2++;
    }

    return merged;
}

// Example usage
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8, 3, 3];
console.log(mergeArrays(arr1, arr2)); 
