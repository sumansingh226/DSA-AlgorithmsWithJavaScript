// 20. **Determine if a given array is a palindrome.**

//palidrome means if we revrese and array it should be same 


const checkIsArrayPalidndrome = arr => {

    //  array should not be empty 
    //if revrese the  elemnts it should be same 
    let givenArray = arr;

    for (let i = givenArray.length - 1; i >= 0; i--) {
        for (let j = 0; j < array.length; j++) {
            if (givenArray[i] !== arr[i]) {
                return 'given array is not palindrome';
            }
        }

    }

    return 'given array is  palindrome';

}

const inputArray = [4, 5, 5, 4];
const result = checkIsArrayPalidndrome(inputArray)
console.log(result);