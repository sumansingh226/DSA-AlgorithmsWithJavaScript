/*given an array nums of n integers, are these elements  a , b ,c in nums such that a+b+c=0?
find all unique  triples in the array which the sum of zero notice that the solution set must not contain 
duplicate triples*/

const threeSumBruteForce = (nums, target) => {
    // Initialize an empty array to store the result.
    const result = [];
    const n = nums.length
    // Loop through each element in the array up to the third-to-last element.
    for (let i = 0; i < n; i++) {
        // Loop through each element in the array starting from the next element after 'i'.
        for (let j = i + 1; j < n; j++) {
            // Loop through each element in the array starting from the next element after 'j'.
            for (let k = j + 1; k < n; k++) {
                // Check if the sum of the current triplet (nums[i], nums[j], nums[k]) is equal to the target.
                if (nums[i] + nums[j] + nums[k] === target) {
                    // If the sum is equal to the target, push the triplet into the 'result' array.
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    // Return the final result array containing all triplets that sum up to the target.
    return result;
};

// Example usage:
// Define an array 'nums' and a target value 'target'.
let nums = [-1, 0, 1, 2, -1, -4];
let target = 0;

// Call the 'threeSumBruteForce' function with the provided 'nums' and 'target'.
// Print the result to the console.
console.log(threeSumBruteForce(nums, target));



function threeSumClosest(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === target) {
                // If the sum is equal to the target, push the triplet into the 'result' array.
                result.push([nums[i], nums[j], nums[k]]);
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result;
}

// Example usage:

const result = threeSumClosest(nums, target);
console.log(result);


