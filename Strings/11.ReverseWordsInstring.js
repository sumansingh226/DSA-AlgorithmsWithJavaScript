// 11. [*] Implement a function to reverse words in a given string.


const revreseWordsInString = str => {
    let inputString = str;
    inputString = inputString.split(' ');
    let reverseString = "";

    // string , it must have somewords , it should not be empty 
    if (inputString.length <= 0) {
        return "String mshould be contain some words to return"
    }
    for (let index = inputString.length - 1; index >= 0; index--) {
        reverseString += `${inputString[index]} `
    }
    return reverseString;
}

const inputString = "This is a String";
const result = revreseWordsInString(inputString);
console.log('original string', inputString);
console.log('output reversed string', result);