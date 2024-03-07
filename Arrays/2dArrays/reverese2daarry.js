function reverse2DArray(arr) {
    const reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray[i] = [];
        for (let j = arr[i].length - 1; j >= 0; j--) {
            reversedArray[i].push(arr[i][j]);
        }
    }
    return reversedArray;
}

const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const reversedArray = reverse2DArray(twoDArray);
console.log(reversedArray);
