// 14. **Calculate the average of elements in an array.**


const averageOfElements = ((arr) => {
    let avg = 0;
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        sum += arr[i]
    }

    avg = sum / n;
    return avg;

});


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const result = averageOfElements(inputArray);
console.log(result);