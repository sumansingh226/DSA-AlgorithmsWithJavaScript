
// 3. [ ] Remove Duplicates from Sorted Array: Given a sorted array nums, remove the duplicates in-place such
// that each element appears only once and returns the new length.


function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // Initialize a pointer to keep track of unique elements
    let uniqueIndex = 0;


}

// Example usage:
let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4];
let length = removeDuplicates(nums);
console.log("New length:", length); // Output: 5
console.log("Array after removing duplicates:", nums.slice(0, length)); // Output: [0, 1, 2, 3, 4]
