// 5. **Find the second largest element in an array.**
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        return "There is no second largest element in the array";
    } else {
        return secondLargest;
    }
}

// Example usage:
const array = [4, 7, 1, 9, 3, 8];
const secondLargest = findSecondLargest(array);
console.log("Second Largest Element:", secondLargest);
