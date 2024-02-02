// 8. [ ] Implement a function to perform basic string compression using the counts of repeated characters.


const basicStringCompression = str => {
    let countCharFrequency = {};
    let compressedStr = "";

    for (const value of str) {
        countCharFrequency[value] ? countCharFrequency[value] += 1 : countCharFrequency[value] = 1;
    }
    for (const key in countCharFrequency) {
        compressedStr += `${key}${countCharFrequency[key]}`
    }
    return compressedStr

}


const inputString = "aabcccccaaa";
const result = basicStringCompression(inputString)
console.log(result);