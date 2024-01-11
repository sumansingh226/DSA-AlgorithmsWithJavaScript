/* Input: 3 sorted arrays of variable length

const input1 = [3, 6, 8, 10, 15];
const input2 = [1, 5, 12];
const input3 = [4, 8, 15, 16];

Output: Minimum range is 4-7   solve this question and define problem in breif and solution also */

function findMinimumRange(arr1, arr2, arr3) {
    let ptr1 = 0,
        ptr2 = 0,
        ptr3 = 0;
    let minRangeStart = 0,
        minRangeEnd = Infinity;

    while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
        let minVal = Math.min(arr1[ptr1], arr2[ptr2], arr3[ptr3]);
        let maxVal = Math.max(arr1[ptr1], arr2[ptr2], arr3[ptr3]);

        if (maxVal - minVal < minRangeEnd - minRangeStart) {
            minRangeStart = minVal;
            minRangeEnd = maxVal;
        }

        if (arr1[ptr1] === minVal) {
            ptr1++;
        } else if (arr2[ptr2] === minVal) {
            ptr2++;
        } else {
            ptr3++;
        }
    }

    return `Minimum range is ${minRangeStart}-${minRangeEnd}`;
}

// Test cases
const input1 = [3, 6, 8, 10, 15];
const input2 = [1, 5, 12];
const input3 = [4, 8, 15, 16];

const result1 = findMinimumRange(input1, input2, input3);
console.log(result1);

const input4 = [2, 3, 4, 8, 10, 15];
const input5 = [1, 5, 12];
const input6 = [7, 8, 15, 16];

const result2 = findMinimumRange(input4, input5, input6);
console.log(result2);
