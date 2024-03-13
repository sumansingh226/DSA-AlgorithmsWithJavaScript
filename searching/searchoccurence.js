function findFirstOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            result = mid; // Update result but continue searching for the first occurrence
            right = mid - 1; // Continue searching in the left subarray
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Example usage
const nums = [1, 2, 2, 2, 4, 5, 6];
const target = 2;
console.log(findFirstOccurrence(nums, target)); // Output: 1 (index of the first occurrence of 2)
