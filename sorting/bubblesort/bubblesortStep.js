
// Problem: Write a function bubbleSortSteps that takes an array of numbers and returns 
// an array of arrays representing each step of the bubble sort algorithm. Each inner array 
// should represent the state of the array after one pass of the algorithm 
// (with the largest unsorted element bubbled to 
//     its correct position). The final inner array should be the sorted array.

const bubbleSortSteps = (arr) => {
    const steps = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let swapped = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no swap occurred, the array is already sorted
        if (!swapped) {
            break;
        }
        steps.push([...arr]); // Save a copy of the current state
    }
    steps.push([...arr]); // Save the final sorted array
    return steps;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortSteps(arr));
