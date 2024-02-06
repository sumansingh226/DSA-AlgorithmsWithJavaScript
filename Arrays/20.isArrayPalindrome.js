// 20. **Determine if a given array is a palindrome.**

//palidrome means if we revrese and array it should be same 


const checkIsArrayPalidndrome = arr => {

    //  array should not be empty 
    //if revrese the  elemnts it should be same 
    let givenArray = arr;

    for (let index = givenArray.length - 1; index >= 0; index--) {
        if (givenArray[index] !== arr[index]) {
            return 'given array is not palindrome';
        }

    }

    return 'given array is  palindrome';

}

const inputArray = [4, 5, 5, 4];
checkIsArrayPalidndrome(inputArray)