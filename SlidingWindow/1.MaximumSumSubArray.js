// Maximum Sum Subarray of Size K

function maxSumSubarrayOfSizeK(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;
    let windowEnd = 0

    for (windowEnd; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        // Slide the window if we have reached the size K
        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]; // Remove the element going out of the window
            windowStart++; // Slide the window ahead
        }
    }

    return maxSum;
}

// Example usage:
const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 5;
console.log("Maximum sum of subarray of size K:", maxSumSubarrayOfSizeK(arr, k)); // Output: 16
