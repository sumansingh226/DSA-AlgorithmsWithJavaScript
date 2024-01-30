// 13. **Implement a simple linear search in an array.**



const linerSearchInArray = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) {
            return `The Element ${n} exists in the array at index ${i}`;
        }
    }
    return `The Element ${n} does not exist in the given array.`;
}

let element = 8;
const inputArray = [1, 2, 5, 3, 4, 6, 7, 8];
const result = linerSearchInArray(inputArray, element);
console.log(result);
