
/*Pair Sum in Array: Given an array and a target sum,
 find if there are two elements in the array that add up to the target sum.
 also return pair*/

function hasPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            // Return an object indicating the pair exists and provide the pair array
            return { doesPairExist: true, pair: [arr[left], arr[right]] };
        }

        if (currentSum < target) left++;
        else right--;
    }

    // If no pair is found, return an object indicating that
    return { doesPairExist: false, pair: [] };
}



const arr = [1, 2, 3, 5, 6, 9];
const targetSum = 12;
const result = hasPairWithSum(arr, targetSum)
console.log("pairExist", result.doesPairExist);
console.log("pair", result.pair);
