// nitialize a 2D array with zeros

function initialize2DArray(rows, cols) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            array[i][j] = 0;
        }
    }
    return array;
}

const rows = 4;
const cols = 4;
const matrix = initialize2DArray(rows, cols);
console.log(matrix);
