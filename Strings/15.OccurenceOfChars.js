// 15. [ ] Create a program to count the number of occurrences of a character in a string.


const occurenceOfChar = str => {
    const charOccurence = {};
    for (const value of str) {

        if (charOccurence[str[value]]) {
            charOccurence[str[value]] += 1;
        }
        else {
            charOccurence[str[value]] += 1;
        }
    }
    return charOccurence;
}

const inputString = "SumanSingh"
const result = occurenceOfChar(inputString);
console.log("char occurence of String :", result);