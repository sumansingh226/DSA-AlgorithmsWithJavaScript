// 5. [*] Implement a function to count the number of vowels in a string.

// vowels :  a , e , i ,o ,u 


const countNumberOfVowles = str => {
    const vowlesInAlphabets = ['a', 'e', 'i', 'o', 'u'];
    let vowlesInString = [];

    for (const char of str) {
        if (vowlesInAlphabets.includes(char) && !vowlesInString.includes(char)) {
            vowlesInString.push(char)
        }

    }
    return vowlesInString;
}

const inputStr = "My Name is Suman Singh. "

const result = countNumberOfVowles(inputStr)
console.log("vowles presnt in string :", result);

console.log("number vowles presnt in string :", result.length);
