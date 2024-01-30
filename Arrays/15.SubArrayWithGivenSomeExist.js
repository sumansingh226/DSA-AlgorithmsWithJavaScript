// 15. **Check if a subarray with given sum exists.**

function subarrayWithGivenSum(arr, targetSum) {
    let currentSum = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        while (currentSum > targetSum) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === targetSum) {
            return true;
        }
    }

    return false;
}

// Example usage:
const arr = [11, 4, 1, 20, 3, 10, 5];
const targetSum = 5;
console.log("Subarray with given sum exists:", subarrayWithGivenSum(arr, targetSum));
