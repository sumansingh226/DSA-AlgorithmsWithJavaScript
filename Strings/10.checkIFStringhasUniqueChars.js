// 10. [*] Write a function to check if a string has all unique characters.

const checkIfStrinhHasAllUniqueChars = (str) => {

    // check if string is non-empty
    if (str.length <= 0) {
        return "string must be contain some characters";
    }
    const countCharFrequency = {};

    for (let i = 0; i < str.length; i++) {

        if (countCharFrequency[str[i]]) countCharFrequency[str[i]] += 1; else
            countCharFrequency[str[i]] = 1;
    }
    for (const value in countCharFrequency) {
        if (countCharFrequency[value] > 1
        ) {
            return `String "${str}"  contain  duplicat value`
        }
        else
            return `String "${str}" has all   unique  characters`

    }
};

const inputString = "suman";

const result = checkIfStrinhHasAllUniqueChars(inputString);
console.log(result);
