

// The filter function is used to create a new array containing only the elements of the original array that
//  satisfy a given condition.

const arr = [-1, 2, -6, 0, 3, 4, 5, 6];

function double(x) {
    return x > 0;
}

const output = arr.filter(double);
console.log("output", output);