function matrixProduct(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];
const matrix2 = [
    [7, 8],
    [9, 10],
    [11, 12]
];
const product = matrixProduct(matrix1, matrix2);
console.log(product);
