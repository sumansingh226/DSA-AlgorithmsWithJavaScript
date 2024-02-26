function permute(arr) {
    let result = [];

    function swap(a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    function generate(n) {
        if (n === 1) {
            result.push(Number(arr.join("")));
            return;
        }

        for (let i = 0; i < n; i++) {
            generate(n - 1);
            if (n % 2 === 0) {
                swap(i, n - 1);
            } else {
                swap(0, n - 1);
            }
        }
    }

    generate(arr.length);
    return result;
}

let n = 3;
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let permutations = permute(arr);
console.log("Permutations:", permutations);
