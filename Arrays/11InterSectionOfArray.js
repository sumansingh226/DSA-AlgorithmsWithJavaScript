// 12. **Find the intersection of two arrays.**


function findIntersection(arr1, arr2) {
    let intersection = [];
    let i = 0, j = 0;

    // Sorting arrays (if not already sorted)
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return intersection;
}

// Example usage:
const arr1 = [1, 3, 4, 6, 5, 2, 7];
const arr2 = [2, 3, 5, 7];
console.log("Intersection:", findIntersection(arr1, arr2));
