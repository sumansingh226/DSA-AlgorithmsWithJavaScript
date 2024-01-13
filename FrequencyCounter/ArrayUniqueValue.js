
// Write a function countFrequency(arr) that takes an array of elements as
//  input and returns an object representing the frequency of each unique element in the array.


function countFrequency(arr) {
    // Create an empty object to store frequencies
    const frequencyCounter = {};

    // Loop through the array
    for (let element of arr) {
        // If the element is already in the counter, increment its count
        if (frequencyCounter[element]) {
            frequencyCounter[element]++;
        } else {
            // If the element is not in the counter, add it with a count of 1
            frequencyCounter[element] = 1;
        }
    }
    // Return the frequency counter object
    return frequencyCounter;
}

// Example usage:
const arr = [1, 2, 3, 4, 1, 2, 2, 3, 4, 5, 5];
console.log(countFrequency(arr));
