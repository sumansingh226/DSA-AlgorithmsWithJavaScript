function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found in array
}

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 20];
let target = 7;
let index = binarySearch(arr, target);
console.log(index); 
