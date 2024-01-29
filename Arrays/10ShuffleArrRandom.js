// 10. **Implement a function to shuffle an array randomly.**

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
