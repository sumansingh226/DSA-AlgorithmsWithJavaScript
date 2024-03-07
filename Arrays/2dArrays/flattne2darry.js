function flatten2DArray(arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flattened.push(arr[i][j]);
        }
    }
    return flattened;
}

const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const flattenedArray = flatten2DArray(twoDArray);
console.log(flattenedArray);
