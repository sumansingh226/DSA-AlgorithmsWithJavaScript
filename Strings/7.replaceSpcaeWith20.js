
// 7. [ ] Write a function to replace all spaces in a string with '%20'.

const replaceSpacesWithoutBuiltIn = (inputString) => {
    let result = '';
    for (const char of inputString) {
        if (char === ' ') {
            result += '%20';
        } else {
            result += char;
        }
    }
    return result;
}

// Example usage:
const inputString = "Hello World in JavaScript";
const result = replaceSpacesWithoutBuiltIn(inputString);
console.log(result);
