// count number of chars in given array of string 


const countCharsInGivenArray = (arr) => {

    let length = 0;
    for (const value of arr) {

        length += value.length;
    }
    return length;
}

const arr = ["char1", "char2", "char3", "char4"];
const result = countCharsInGivenArray(arr);