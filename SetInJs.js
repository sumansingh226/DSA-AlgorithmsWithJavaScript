// Creating a Set
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add('Hello');
mySet.add(true);
mySet.add(1); // This duplicate value won't be added

// Checking the size of the Set
console.log("Size of the Set:", mySet.size); // Output: 3

// Checking if an element exists in the Set
console.log("Checking if 'Hello' exists in the Set:", mySet.has('Hello')); // Output: true

// Deleting an element from the Set
mySet.delete(true);

// Iterating over the Set
console.log("Iterating over the Set:");
mySet.forEach(item => console.log(item));

// Converting Set to Array
const myArray = Array.from(mySet);
console.log("Set converted to Array:", myArray); // Output: [1, 'Hello']

// Clearing the Set
mySet.clear();
console.log("Cleared Set:", mySet); // Output: Set {}
