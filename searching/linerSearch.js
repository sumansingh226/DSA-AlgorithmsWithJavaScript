// Write a function called linearSearch which accepts an array and a value, 
// and returns the index at which the value exists. 
// If the value does not exist in the array, return -1.


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
