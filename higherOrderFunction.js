const listRadiuses = [2, 6, 7, 8, 3, 9];

// without higher order functions
const calculateArea = function (radiuses) {
    const output = [];
    for (const radius of radiuses) {
        output.push(Math.PI * radius * radius);
    }
    return output;
};

console.log("Area of circle ", calculateArea(listRadiuses));

const calculateCircumference = function (radiuses) {
    const output = [];
    for (const radius of radiuses) {
        output.push(2 * Math.PI * radius);
    }
    return output;
};

console.log("Area of circumference ", calculateCircumference(listRadiuses));

const calculateDiameter = function (radiuses) {
    const output = [];
    for (const radius of radiuses) {
        output.push(2 * radius);
    }
    return output;
};

console.log("Area of Diameter ", calculateDiameter(listRadiuses));

// with higher order function
const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};
const diameter = function (radius) {
    return 2 * radius;
};

const calculate = function (radiuses, logic) {
    const output = [];
    for (const radius of radiuses) {
        output.push(logic(radius));
    }
    return output;
};


console.log("calculate area", calculate(listRadiuses, area));
console.log("calculate circumference", calculate(listRadiuses, circumference));
console.log("calculate diameter", calculate(listRadiuses, diameter));