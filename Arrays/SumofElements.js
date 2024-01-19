// 2. ** Calculate the sum of elements in an array.**


const sumOfElemets = ((array) => {
    let sum = 0;
    for (const iterator of array) {
        sum += iterator;
    }

    return sum;

});

const array = [2, 5, -4, 7, 6]
const result = sumOfElemets(array);
console.log("sum of given elements ", result);