//
function reverseArray(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        // Swap elements at positions i and j
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr; // return the reversed array
}

const inputArray = [2, 3, 4, 5, 60, 55];
const result = reverseArray(inputArray);
console.log("result", result);
