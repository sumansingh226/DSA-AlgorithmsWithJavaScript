// 9. [*] Create a program to find the longest common prefix among an array of strings.


const longestCommonPrefix = (strings) => {
    if (strings.length === 0) {
        return "";
    }

    // Sort the array to bring strings with common prefixes together
    strings.sort();

    // Take the first and last strings after sorting
    const firstStr = strings[0];
    const lastStr = strings[strings.length - 1];

    // Compare characters of the first and last strings
    let commonPrefix = "";
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] === lastStr[i]) {
            commonPrefix += firstStr[i];
        } else {
            break;
        }
    }

    return commonPrefix;
}

// Example usage
const stringsArray = ["flower", "flow", "foight"];
const result = longestCommonPrefix(stringsArray);
console.log("Longest Common Prefix:", result);
