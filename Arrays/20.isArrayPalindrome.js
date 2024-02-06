// 20. **Determine if a given array is a palindrome.**

//palidrome means if we revrese and array it should be same 


const checkIsArrayPalindrome = arr => {
    // Loop through the array from start to end and from end to start simultaneously
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        // Compare elements at the current positions
        if (arr[i] !== arr[j]) {
            return 'given array is not palindrome';
        }
    }

    return 'given array is palindrome';
}

const inputArray = [1, 2, 3, 2, 1, 5];
const result = checkIsArrayPalindrome(inputArray);
console.log(result); // Output: given array is palindrome
