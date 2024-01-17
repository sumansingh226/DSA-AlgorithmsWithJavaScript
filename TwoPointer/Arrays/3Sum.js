/*given an array nums of n integers, are these elements  a , b ,c in nums such that a+b+c=0?
find all unique  triples in the array which the sum of zero notice that the solution set must not contain 
duplicate triples*/

const findUniqueTriplesUtoZero = (arr) => {
    // array length should be greater than or equal to 3
    if (arr.length < 3) {
        return "Array contains less than 3 elements";
    }

    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const sum = arr[i] + arr[j] + arr[k];
                if (sum === 0) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(findUniqueTriplesUtoZero(nums));
