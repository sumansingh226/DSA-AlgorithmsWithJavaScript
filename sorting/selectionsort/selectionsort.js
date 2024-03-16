
/*Selection Sort

Definition: Selection Sort is a simple sorting algorithm that divides the input array 
into two parts: the sorted subarray and the unsorted subarray. Initially, the sorted subarray 
is empty, and the unsorted subarray is the entire input array. The algorithm selects the smallest
 (or largest, depending on the sorting order) element from the unsorted subarray and swaps it with the 
 leftmost unsorted element, thus expanding the sorted subarray's boundary by one element.

Algorithm:

Repeat until the unsorted subarray becomes empty:
Find the minimum element in the unsorted subarray.
Swap the minimum element with the leftmost unsorted element.
Complexity:

Time Complexity: O(n^2) for all cases (best, average, and worst).
Space Complexity: O(1) as it requires only a constant amount of additional space.
Advantages:

Simple implementation.
In-place sorting algorithm (doesn't require extra space).
Good for small arrays or when auxiliary memory is limited.
Disadvantages:

Inefficient for large arrays due to its O(n^2) time complexity.
Not stable (relative order of equal elements may change).
Example:

Input Array: [64, 25, 12, 22, 11]
Step 1: [11, 25, 12, 22, 64] (11 is the smallest, swap with the first element)
Step 2: [11, 12, 25, 22, 64] (12 is the smallest in the remaining, swap with the second element)
Step 3: [11, 12, 22, 25, 64] (22 is the smallest in the remaining, swap with the third element)
Step 4: [11, 12, 22, 25, 64] (25 is the smallest in the remaining, swap with the fourth element)
Step 5: [11, 12, 22, 25, 64] (64 is already in the correct position)*/

const selectionSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Original Array:", arr);
console.log("Sorted Array:", selectionSort(arr));
