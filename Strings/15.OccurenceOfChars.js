// 15. [ ] Create a program to count the number of occurrences of a character in a string.


const occurenceOfChar = str => {
    const charOccurence = {};
    for (const value of str) {

        if (charOccurence[value]) {
            charOccurence[value] += 1;
        }
        else {
            charOccurence[value] += 1;
        }
    }

}

const inputString = "SumanSingh"
occurenceOfChar(inputString);