// 20. **Determine if a given array is a palindrome.**

//palidrome means if we revrese and array it should be same

const checkIsArrayPalindrome = (arr) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] !== arr[j]) {
            return console.log(`given array ${arr} is not palindrome"`);
        }
        i++;
        j--;
    }
    return console.log(`given array ${arr} is palindrome"`);
};

const inputArray1 = [1, 2, 3, 2, 1];
const inputArray2 = [1, 2, 3, 2, 1, 0];
checkIsArrayPalindrome(inputArray1);
checkIsArrayPalindrome(inputArray2);
