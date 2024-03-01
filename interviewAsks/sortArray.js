// sort an  array of integers


function sortRaayOfInteger(arr) {
    const sortedArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }

    return arr;
}

const arr = [2, 5, 1, 3, 6, 0, 9, 4];
const result = sortRaayOfInteger(arr);
console.log(result);