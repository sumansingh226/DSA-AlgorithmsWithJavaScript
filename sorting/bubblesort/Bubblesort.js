// Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
//  compares adjacent elements, and swaps them if they are
// in the wrong order. The pass through the list is repeated until the list is sorted.
//  It's not efficient for large datasets, but it's easy to understand and implement,
//   making it suitable for educational purposes or small datasets

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", array);
console.log("Sorted Array:", bubbleSort(array));
