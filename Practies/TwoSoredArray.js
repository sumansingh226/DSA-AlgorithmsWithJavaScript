// mere two sorted array

// const mergeSortedArrays = (arr1, arr2) => {
//     let mergedArray = [];
//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

const mergingTwoSortedArray = (sortedArray1, sortedArray2) => {

    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < sortedArray1.length && j < sortedArray2.length) {
        if (sortedArray1[i] < sortedArray1[j]) {
            mergedArray.push(sortedArray1[i])
            i++;
        }
        else
        {
            mergedArray.push(sortedArray2[j]);
            j++;
        }
    }
    while(i <sortedArray1.length)
    {
        mergedArray.push(sortedArray1[i])
    }



}