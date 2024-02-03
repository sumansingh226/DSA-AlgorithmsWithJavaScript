// 10. [*] Write a function to check if a string has all unique characters.

const checkIfStrinhHasAllUniqueChars = (str) => {

    // check if string is non-empty
    if (str.length <= 0) {
        return "string must be contain some characters";
    }
    const countCharFrequency = {};

    for (let index = 0; index < array.length; index++) {

        if (countCharFrequency[str[i]]) countCharFrequency[str[i]] += 1; else
            countCharFrequency[str[i]] = 1;
    }
    for (const value in countCharFrequency) {
        if (countCharFrequency[value] > 1
        ) {
            return `${str} contain  duplicat value`
        }
        else
            return `${str} has all   unique  value`

    }
};

const inputString = "suman ";

const result = checkIfStrinhHasAllUniqueChars(inputString);
