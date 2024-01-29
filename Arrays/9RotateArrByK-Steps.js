// Rotate an array to the right by k steps.
// input inputArray = [1,2,3,4,5,6,7];
// k=3
// step 1 : if k =1 output = [7,1,2,3,4,5,6]
// step 2 : if k =2 output = [7,6,1,2,3,4,5]
// step 3 : if k =3 output = [7,6,5,2,3,4,]

function rotateArray(arr, k) {

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
        console.log(`step ${i + 1}:`, arr);
    }
}


const k = 10;
const inputArray = [1, 2, 3, 4, 5, 6, 7];
// rotateArray(inputArray, k)