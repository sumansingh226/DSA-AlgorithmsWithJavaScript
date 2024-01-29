// 10. **Implement a function to shuffle an array randomly.**


/*Shuffling an Array:

Definition:

Shuffling an array involves randomly rearranging the order of its elements to create a random permutation.
Algorithm: Fisher-Yates Shuffle

Iterates through the array from the end to the beginning.
At each step, swaps the current element with a randomly chosen element that precedes it.
Purpose:

Introduces randomness and unpredictability to the order of elements in the array.
Applications:

Commonly used in games for randomizing elements.
Useful in statistical experiments.
Ensures fairness in algorithms or applications requiring randomization. */

function shuffleArray(arr) {
    // Create a copy to avoid modifying the original array
    const shuffledArray = arr.slice();
    const n = shuffledArray.length;
    for (let i = n - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledResult = shuffleArray(originalArray);
console.log(shuffledResult);
