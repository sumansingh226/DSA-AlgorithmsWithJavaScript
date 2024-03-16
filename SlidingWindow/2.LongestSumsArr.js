// Longest Subarray with Sum K

const longestSubarrayWithSumK = (nums, k) => {
    let maxLength = 0;
    let maxStart = 0;
    let maxEnd = -1;
    let sum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum > k) {
            sum -= nums[start];
            start++;
        }

        if (sum === k && end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
            maxEnd = end;
        }
    }

    return nums.slice(maxStart, maxEnd + 1);

}

const nums = [10, 5, 2, 7, 1, 5, 9];
const k = 15;
console.log(longestSubarrayWithSumK(nums, k)); 
