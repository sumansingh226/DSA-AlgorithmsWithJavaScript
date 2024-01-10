const frequencyCount = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        console.log("Arrays have different lengths. Cannot compare.");
        return;
    }

    const squaredMap = {}; // Store the frequency of squares of elements in arr1

    // Count the frequency of squares of elements in arr1
    for (let i = 0; i < arr1.length; i++) {
        const square = arr1[i] * arr1[i];
        if (squaredMap[square]) {
            squaredMap[square]++;
        } else {
            squaredMap[square] = 1;
        }
    }
    console.log("squaredMap", squaredMap);
    // Check if elements in arr2 are squares of elements in arr1
    for (let i = 0; i < arr2.length; i++) {
        if (squaredMap[arr2[i]]) {
            squaredMap[arr2[i]]--;
        } else {
            console.log("squaredMap", squaredMap);
            console.log("false");
            return;
        }
    }
    console.log("squaredMap", squaredMap);
    console.log("true");
};

// Test the function
frequencyCount([1, 2, 3, 4], [1, 4, 5, 16]); // Output: true
