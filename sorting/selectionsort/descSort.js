const selectionSortDescending = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let maxIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[maxIdx]) {
                maxIdx = j;
            }
        }
        if (maxIdx !== i) {
            [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
        }
    }
    return arr;
}

const arr = [64, 34, 2520, 0, 5, 7, 3, 90];
console.log(selectionSortDescending(arr)); 
