
/* The map function is used to transform each element of an array into a new element, based on a given 
transformation function.
// It creates a new array with the same length as the original array, where each element is the 
result of applying the transformation function to the corresponding element of the original array.*/

const arr = [2, 3, 4, 5, 6];

function double(x) {
    return x * 2;
}

const output = arr.map(double);
console.log("output", output);
