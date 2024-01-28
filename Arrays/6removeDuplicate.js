// 6. **Remove duplicates from an array.**

function removeDuplicates(arr) {
    const uniqueArray = [];
    const seenElements = {};

    for (const element of arr) {
        if (!seenElements[element]) {
            uniqueArray.push(element);
            seenElements[element] = true;
        }
    }

    return uniqueArray;
}

// Example usage:
const array = [1, 2, 3, 4, 2, 5, 6, 1];
const uniqueArray = removeDuplicates(array);
console.log("Array without duplicates:", uniqueArray);
