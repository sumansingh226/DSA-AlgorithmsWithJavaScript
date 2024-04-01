function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

    function isSafe(row, col) {
        // Check if there is a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        // Check upper left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // Check upper right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    function solve(row) {
        if (row === n) {
            const solution = board.map(row => row.join(''));
            result.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    }

    solve(0);
    return result;
}

const n = 4;
const solutions = solveNQueens(n);
console.log(`Solutions for ${n} queens:`, solutions);
