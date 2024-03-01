// sort an  array of integers


function sortArrayOfInteger(arr) {
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // If no swaps were made, the array is already sorted
    }

    return arr;
}

const arr = [2, 5, 1, 3, 6, 0, 9, 4];
const result = sortArrayOfInteger(arr);
console.log(result);
