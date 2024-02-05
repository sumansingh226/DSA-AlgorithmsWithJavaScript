// 15. [ ] Create a program to count the number of occurrences of a character in a string.


const occurenceOfChar = str => {
    const inputStr = str.toLowerCase();
    let charOccurence = {};
    for (const value of inputStr) {
        if (charOccurence[value]) {
            charOccurence[value] += 1;
        }
        else {
            charOccurence[value] = 1;
        }
    }
    return JSON.stringify(charOccurence);
}

const inputString = "Sumansinghchauhan"
const result = occurenceOfChar(inputString);
console.log("char occurence of String :", result);