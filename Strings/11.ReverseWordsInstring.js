// 11. [*] Implement a function to reverse words in a given string.


const revreseWordsInString = str => {
    let inputString = str;
    inputString = inputString.split(' ');

    // string , it must have somewords , it should not be empty 
    if (inputString.length <= 0) {
        return "String mshould be contain some words to return"
    }
    for (let index = inputString.length; index > 0; index--) {
        inputString += inputString[i]
    }
    return inputString;
}

const inputString = "This is a String";
revreseWordsInString(inputString)