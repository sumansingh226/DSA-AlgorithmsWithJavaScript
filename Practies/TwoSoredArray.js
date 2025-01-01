// mere two sorted array and make new sorted array



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
    return mergedArray;
}

const sortedArray1 = [1,5,6,8,10,12];
const sortedArray2 = [0,2,3,5,7];

const result = mergingTwoSortedArray(sortedArray1,sortedArray2);
console.log("result",result);
