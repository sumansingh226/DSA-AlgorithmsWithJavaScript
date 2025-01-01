// mere two sorted array



const mergingTwoSortedArray = (sortedArray1, sortedArray2) => {

    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < sortedArray1.length && j < sortedArray2.length) {
        if (sortedArray1[i] < sortedArray1[j]) {
            mergedArray.push(sortedArray1[i])
            i++;
        }
        else {
            mergedArray.push(sortedArray2[j]);
            j++;
        }
    }
    while (i < sortedArray1.length) {
        mergedArray.push(sortedArray1[i])
    }
    while (j < sortedArray2.length) {
        mergedArray.push(sortedArray2[j])
    }



}