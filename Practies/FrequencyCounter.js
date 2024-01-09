

const frequencyCount = ((arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {

        //check if corospondance array has square value
        if (arr2[i] === arr1[i] * arr1[i]) {
            console.log("true");
        }
    }
})
frequencyCount([1, 2, 3, 4], [1, 4, 6, 12])

