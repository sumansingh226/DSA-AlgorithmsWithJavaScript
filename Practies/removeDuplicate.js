// remove duplicate


function removeDuplicate(arr) {
    let input = arr;
    const frequency = {};

    for (const element of input) {
        if (frequency[element]) frequency[element] += 1;
        else frequency[element] = 1;
    }


}


const arr = [5, 6, 2, 5, 3, 4, 6];
removeDuplicate(arr);
