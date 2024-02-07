// 1. [ ] Two Sum: Given an array of integers, return indices of the two numbers such 
// that they add up to a specific target.


function twoSum(nums, target) {
    // Sort the array to use two-pointer technique
    const sortedNums = [...nums].sort((a, b) => a - b);
    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right];
        if (sum === target) {
            // Find the original indices of the numbers
            const index1 = nums.indexOf(sortedNums[left]);
            let index2 = nums.lastIndexOf(sortedNums[right]);
            // If both indices are the same, search for another occurrence of the number
            if (index1 === index2) {
                index2 = nums.indexOf(sortedNums[right], index1 + 1);
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
const nums = [2, 7, 11, 15];
con
