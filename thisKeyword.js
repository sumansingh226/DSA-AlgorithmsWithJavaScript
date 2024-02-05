
/* 00:00 🔑 JavaScript's "this" keyword can be confusing for many and behaves differently in various scenarios.
00:55 🔑 The behavior of the "this" keyword depends on the context, such as whether it's in a function, global space, or an arrow function.
04:17 🔑 In the global space, the value of "this" is the global object, which can vary depending on the JavaScript runtime environment (e.g., window in browsers, Global in Node.js).
07:30 🔑 Inside a function, the value of "this" can be undefined in strict mode or the global object in non-strict mode.
10:06 🔑 JavaScript uses a mechanism called "this substitution," where "this" is replaced with the global object when it's undefined or null in non-strict mode.
16:11 🔑 Inside an object's method, "this" refers to the object itself where the method is called.
21:11 🔑 "call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
26:23 🔑 It's essential to understand "call," "apply," and "bind" to effectively control the value of "this" in JavaScript methods.
27:30 🔑 In global space, the 'this' keyword refers to the global object (e.g., 'window' in the browser).
28:08 🔑 In strict mode, 'this' inside a function is undefined; in non-strict mode, it refers to the global object.
35:23 🔑 Understanding "this" substitution: When 'this' is undefined or null inside a function, it becomes the global object.
39:59 🔑 Inside an object's method, 'this' refers to the object itself.
44:12 🔑 The 'call' method can be used to invoke a function with a specific 'this' context.
46:01 🔑 Arrow functions do not have their own 'this' binding and take the value of the enclosing lexical context.
48:46 🔑 In the context of DOM elements, 'this' refers to the specific HTML element being interacted with. */

"use strict"

/*Global Context:
 *******this keyword in global space
When used outside of any function, this refers to the global object.
In browsers, the global object is window, while in Node.js, it's global. 
In web development, the "window" object is a global object that represents
 the browser window or frame that contains the document being viewed.

*/

console.log("global space", this);

// this inside a function
function x() {
    // depend on strict  mode 
    console.log("this inside a function ", this);
}

//this in a non-strict mode  - (this substitutions)
// if the value of this keyword is undefined or
// null this will be replaced with global object(only in non-strict mode)

// this keyword value depend upton how it is calling 
x()
window.x()



// this inside object's method 

const student = {
    name: "Suman Singh",
    printName: function () {
        console.log("this inside object's method ", this);
        console.log(" this.a", this.name);
    }
}
student.printName()

const student2 = {
    name: "Suman Chauhan",
}

student.printName.call(student2)

// call apply bind methods (sharing )



//inside arrow function

// arrow function dose not have their own this keyword it use it's lexical this

const obj = {
    name: "Suman Chauhan",
    x: () => {
        console.log("this inside arrow", this);
    }
}

obj.x()
const obj2 = {
    name: "Suman Chauhan",
    x: function () {
        console.log("this outer inside nested arrow", this);
        return () => {
            console.log("this inside nested arrow", this);
        };
    }
};

obj2.x()


// this keyword in dom
// value is reference  to html element 

