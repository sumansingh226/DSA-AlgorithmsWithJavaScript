// Given a sorted array, find two elements that sum up to a specific target.

function twoSum(arr, target) {
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [arr[left], arr[right]];
        } if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

// 
const array = [2, 7, 11, 15, 18];
const targetSum = 26;
console.log(twoSum(array, targetSum));
