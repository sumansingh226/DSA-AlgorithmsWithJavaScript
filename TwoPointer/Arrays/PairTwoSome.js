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
