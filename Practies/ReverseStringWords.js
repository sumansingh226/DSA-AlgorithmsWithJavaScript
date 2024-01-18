
const reverseWordsInString = ((str) => {
    let newStr = str.split(' ');
    let result = "";

    for (let i = newStr.length - 1; i >= 0; i--) {
        result += `${newStr[i]} `;
    }
    return result;
})

const inputString = "This is a java Program";
const result = reverseWordsInString(inputString)
console.log("result", result);
//Program java a is This