//print  sum of n numbers using recursion

function printSumOfNNumbers(n, i) {
    if (i > n) {
        return 0;
    } else {
        return i + printSumOfNNumbers(n, i + 1);
    }
}

const n = 10;
const i = 1;
const result = printSumOfNNumbers(n, i);
console.log("result", result);
