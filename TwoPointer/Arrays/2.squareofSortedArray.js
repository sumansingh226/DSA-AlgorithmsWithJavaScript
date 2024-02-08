// 2. [ ] Squares of a Sorted Array: Given an integer array nums sorted in non-decreasing order,
//  return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {

    const n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;

    // Fill the result array from right to left with squared values
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }

    return result;
}

const nums = [-4, -1, 0, 3, 10];
console.log("arr", nums);
console.log("square", sortedSquares(nums)); 
