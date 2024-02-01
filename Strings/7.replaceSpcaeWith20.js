
// 7. [ ] Write a function to replace all spaces in a string with '%20'.

function replaceSpacesWithoutBuiltIn(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ') {
            result += '%20';
        } else {
            result += inputString[i];
        }
    }
    return result;
}

// Example usage:
const inputString = "Hello World in JavaScript";
const result = replaceSpacesWithoutBuiltIn(inputString);
console.log(result);
