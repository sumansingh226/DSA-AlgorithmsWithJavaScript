function charCount(str) {
    let countObject = {};

    if (typeof str !== "string") {
        return console.log("Given input is not a valid string");
    }

    let charCountString = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    for (let i = 0; i < charCountString.length; i++) {
        let char = charCountString[i];
        if (countObject[char]) {
            countObject[char] = +1;
        } else {
            countObject[char] = 1;
        }
    }
    console.log("countObject", countObject);
}

charCount("Suman   Singh is a software engineer");
