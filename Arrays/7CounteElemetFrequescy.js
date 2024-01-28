// 7. **Count the occurrences of a specific element in an array.**


const countElelemtyFrequency = (arr) => {
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {

        if (frequency[arr[i]]) {
            frequency[arr[i]] += 1
        }
        else {
            frequency[arr[i]] = 1

        }
    }
    console.log("frequency", frequency);

}

const inputArray = [1, 2, 1, 0, 1, 2, 1];
const result = countElelemtyFrequency(inputArray);
