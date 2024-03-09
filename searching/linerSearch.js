function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

const arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 30));
console.log(linearSearch(arr, 70)); 
