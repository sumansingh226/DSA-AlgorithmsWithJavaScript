// 11. ** Determine if there are any duplicate elements in an array.**

const findDuplicatesInArray = (arr) => {
    let elementsCount = {};
    let duplicateElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (elementsCount[arr[i]]) {
            elementsCount[arr[i]] += 1;
        } else {
            elementsCount[arr[i]] = 1;
        }
    }

    for (const key in elementsCount) {
        if (elementsCount[key] > 1) {
            duplicateElements.push(Number(key));
        }
    }

    console.log(duplicateElements);
};

const inputArray = [1, 2, 3, 2, 1, 5, 0, 6, 0];
findDuplicatesInArray(inputArray);
