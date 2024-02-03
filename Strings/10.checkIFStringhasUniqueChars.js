// 10. [*] Write a function to check if a string has all unique characters.

const checkIfStrinhHasAllUniqueChars = (str) => {
    const inputStr = str.toLowerCase();
    // check if string is non-empty
    if (inputStr.length <= 0) {
        return "string must be contain some characters";
    }
    const countCharFrequency = {};

    for (let i = 0; i < inputStr.length; i++) {

        if (countCharFrequency[inputStr[i]]) countCharFrequency[inputStr[i]] += 1; else
            countCharFrequency[inputStr[i]] = 1;
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

const inputString = "Suman singh";

const result = checkIfStrinhHasAllUniqueChars(inputString);
console.log(result);


// Time Complexity: O(n)
// Space Complexity: O(k)