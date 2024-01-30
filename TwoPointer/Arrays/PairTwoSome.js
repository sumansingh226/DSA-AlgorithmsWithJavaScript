
/*Pair Sum in Array: Given an array and a target sum,
 find if there are two elements in the array that add up to the target sum.
 also return pair*/

function hasPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    let pair = [];
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === target) { return { dosePairexist: true, pair: pair.push([arr[left], arr[right]]) } }
        if (currentSum < target) left++;
        else right--;
    }
    return false;
}

const arr = [1, 2, 3, 5, 6, 9];
const targetSum = 12;
const result = hasPairWithSum(arr, targetSum)
console.log(result);
