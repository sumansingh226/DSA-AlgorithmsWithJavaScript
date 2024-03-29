//   find unique and command array in two gien arraty


function intersection(arr1, arr2) {
    // Sort the arrays (if they are not already sorted)
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } if (arr1[i] > arr2[j]) {
            j++;
        }
        else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }

    return result;
}


const arr1 = [1, 5, 7, 6, 7, 4, 6, 9, 3];
const arr2 = [5, 4, 0, 88, 3, 6, 2, 4, 1]
const result = intersection(arr1, arr2);
console.log("result", result)