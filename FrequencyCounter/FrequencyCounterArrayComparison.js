const frequencyCountofTwoArray = (array1, array2) => {
    if (array1.length !== array2.length) {
        return console.log("Both array should be same length");
    }
    let frequencyCounts = {};

    for (let i = 0; i < array1.length; i++) {
        const square = array1[i] * array1[i];
        if (frequencyCounts[square]) {
            frequencyCounts[square]++;
        } else {
            frequencyCounts[square] = 1;
        }
    }

    console.log("frequencyCounts", frequencyCounts);

    for (let j = 0; j < array2.length; j++) {
        if (frequencyCounts[array2[j]]) {
            frequencyCounts[array2[j]]--;
        } else {
            console.log("frequencyCounts", frequencyCounts);

            return console.log("false");
        }
    }
    console.log("true");

    console.log("frequencyCounts", frequencyCounts);
};

frequencyCountofTwoArray([1, 2, 3, 4], [1, 4, 9, 16]); 
