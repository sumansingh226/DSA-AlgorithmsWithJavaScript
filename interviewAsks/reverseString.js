// reverse a string 


function reverseString(inputStr) {
    let reverseStr = "";
    for (let i = inputStr.length - 1; i >= 0; i--) {

        reverseStr += inputStr[i]
    }
    return reverseStr;
}

const str = "suman singh";

const result = reverseString(str);
console.log(result);