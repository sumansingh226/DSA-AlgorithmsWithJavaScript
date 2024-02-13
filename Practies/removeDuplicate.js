function removeDuplicate(arr) {
    const frequency = {};
    const result = [];

    for (const element of arr) {
        if (frequency[element]) frequency[element] += 1;
        else frequency[element] = 1;
    }

    for (const element of arr) {
        if (frequency[element] > 0) {
            result.push(element);
            frequency[element] = 0;
        }
    }

    return result;
}

const arr = [5, 6, 2, 5, 3, 4, 6];
const result = removeDuplicate(arr);
console.log("original array ", arr);
console.log("remove duplicate ", result);
