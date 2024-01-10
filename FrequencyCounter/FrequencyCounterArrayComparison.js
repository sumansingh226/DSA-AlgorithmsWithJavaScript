const frequencyCountofTwoArray = (array1, array2) => {
    if (array1.length !== array2.length) {
        return console.log("Both arrays should be of the same length");
    }

    let frequencyCounts = {};

    for (const value of array1) {
        const square = value * value;
        frequencyCounts[square]
            ? frequencyCounts[square]++
            : (frequencyCounts[square] = 1);
    }
    console.log("frequencyCounts", frequencyCounts);
    for (const value of array2) {
        if (frequencyCounts[value]) frequencyCounts[value]--;
        else return console.log("false");
    }
    console.log("true");
    console.log("frequencyCounts", frequencyCounts);
};

frequencyCountofTwoArray([1, 2, 3, 4], [1, 4, 9, 16]);

