

// The filter function is used to create a new array containing only the elements of the original array that
//  satisfy a given condition.

const arr = [-1, 2, -6, 0, 3, 4, 5, 6];

function isOdd(x) {
    return x % 2 == 0;
}

const output = arr.filter(isOdd);
console.log("output", output);