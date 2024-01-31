// 3.[] Create a program to find the first non - repeated character in a string.


const findFirstNonReptCharInString = str => {

    let frequnecyOfChars = {};

    for (const value of str) {
        if (frequnecyOfChars[value]) {
            frequnecyOfChars[value] += 1;
        }
        else {
            frequnecyOfChars[value] = 1;

        }
    }
    for (const value of str) {
        if (frequnecyOfChars[value] === 1) {
            return value
        }

    }
    console.log("frequnecyOfChars", frequnecyOfChars);
}

let input = "suman singh";
const result = findFirstNonReptCharInString(input);
console.log(result);
