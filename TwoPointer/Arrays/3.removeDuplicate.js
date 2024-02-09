
// 3. [ ] Remove Duplicates from Sorted Array: Given a sorted array nums, remove the duplicates in-place such
// that each element appears only once and returns the new length.


function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let uniqueIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }

    return uniqueIndex + 1;
}

let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4];
let length = removeDuplicates(nums);
console.log("New length:", length);
console.log("Array after removing duplicates:", nums.slice(0, length)); 
