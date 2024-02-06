// 20. **Determine if a given array is a palindrome.**

//palidrome means if we revrese and array it should be same 


const checkIsArrayPalidndrome = arr => {

    //  array should not be empty 
    //if revrese the  elemnts it should be same 
    let givenArray = arr;

    for (let i = givenArray.length - 1; i >= 0; i--) {
        for (let j = 0; j < j; j++) {
            console.log("givenArray[i] !== givenArray[j]", givenArray[i], givenArray[j]);
            // if (givenArray[i] !== givenArray[j]) {
            //     return 'given array is not palindrome';
            // }
        }

    }

    return 'given array is  palindrome';

}

const inputArray = [1, 2, 3, 2, 1];
const result = checkIsArrayPalidndrome(inputArray)
console.log(result);