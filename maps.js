// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set(1, 'John');
myMap.set(true, 30);
myMap.set("fun", function name(params) {

});

// Retrieving values from the Map
console.log("Name:", myMap.get('name')); // Output: John
console.log("Age:", myMap.get('age')); // Output: 30
console.log("City:", myMap.get('city')); // Output: New York

// Checking if a key exists in the Map
console.log("Does the Map contain key 'name'?", myMap.has('name')); // Output: true
console.log("Does the Map contain key 'gender'?", myMap.has('gender')); // Output: false

// Getting the size of the Map
console.log("Size of the Map:", myMap.size); // Output: 3

// Deleting a key from the Map
myMap.delete('city');

// Iterating over the Map
console.log("Iterating over the Map:");
myMap.forEach((value, key) => {
    console.log(key, ":", value);
});

// Clearing the Map
myMap.clear();
