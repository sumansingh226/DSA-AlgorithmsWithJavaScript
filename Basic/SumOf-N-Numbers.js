const arr = [12, 12, 68, 0, 9, 3, 9];

let sum = 0; // Initialize a variable to hold the cumulative sum

const cumulativeSum = arr.map((value) => {
    sum += value; // Update the cumulative sum by adding the current value
    return sum; // Return the cumulative sum for each iteration
});

console.log("cumulative sum", cumulativeSum);
