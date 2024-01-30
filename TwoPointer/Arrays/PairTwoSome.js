
/*Pair Sum in Array: Given an array and a target sum,
 find if there are two elements in the array that add up to the target sum.*/

function hasPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === target) return true;
        if (currentSum < target) left++;
        else right--;
    }
    return false;
}
