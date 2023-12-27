const arr = [12, 12, 68, 0, 9, 3, 9];

let sum = 0; // Initialize a variable to hold the  sum

const cumulativeSum = arr.map((value) => {
    sum += value;
    return sum;
});

console.log("cumulative sum", cumulativeSum);
