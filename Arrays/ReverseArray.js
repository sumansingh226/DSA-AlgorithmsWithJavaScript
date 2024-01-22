// **Reverse an array.**


const reverseGivenArray = ((arr) => {
    const reverseArray = [];
    for (let index = arr.length; index > 0; index--) {
        reverseArray.push(arr[index])

    }
    return reverseArray;
})

let arr = [1, 2, 3, 4, 5];
const result = reverseGivenArray(arr)
console.log("Actual array ", arr);
console.log("Reverse Array ", result);