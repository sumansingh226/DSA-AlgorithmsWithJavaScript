// Binary search is a technique used to quickly find a value in a sorted array.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // Math.floor is a function in JavaScript that returns the largest integer less than or equal to a given number.

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const target = 13;
const index = binarySearch(arr, target);
console.log(index);
