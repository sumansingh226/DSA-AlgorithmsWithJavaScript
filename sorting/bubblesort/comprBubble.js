// Problem: Modify the bubbleSort function to also accept a comparator function as a second argument.
//  The comparator function should take two arguments (a and b) and return a negative number if
//   a should come before b, a positive number if b should come before a, or 0 if they are equal.


const bubbleSortComp = (arr, comparator) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage with a comparator function
const arr = [64, 34, 25, 12, 22, 11, 90];
const comparator = (a, b) => a - b; // Ascending order
console.log(bubbleSortComp(arr, comparator)); 
