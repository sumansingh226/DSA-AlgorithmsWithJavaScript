// 1. [ ] Two Sum: Given an array of integers, return indices of the two numbers such 
// that they add up to a specific target.

const twoSum = (nums, target) => {
    // Sort the array to use two-pointer technique
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            // Find the original indices of the numbers
            const index1 = nums.indexOf(nums[left]);
            let index2 = nums.lastIndexOf(nums[right]);
            // If both indices are the same, search for another occurrence of the number
            if (index1 === index2) {
                index2 = nums.indexOf(nums[right], index1 + 1);
            }
            return [index1, index2];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15, 2, 7, 3];
const target = 22;
const result = twoSum(nums, 10)
console.log(result);
