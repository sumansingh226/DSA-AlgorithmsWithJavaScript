const arr = [1, 2, 3, 4, 5];

const output = arr.reduce(function (acc, curr) {
    return acc += curr
}, 0)



console.log(output);