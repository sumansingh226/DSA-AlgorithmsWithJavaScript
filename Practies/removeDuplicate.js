// remove duplicate


function removeDuplicate(arr) {
    let input = [];
    const frequency = {};

    for (const element of arr) {
        if (frequency[element]) frequency[element] += 1;
        else frequency[element] = 1;
    }


    for (const element of arr) {
        if (!frequency[element]) frequency[element]
        input.push(element)
    }
    return input
}


const arr = [5, 6, 2, 5, 3, 4, 6];
removeDuplicate(arr);
