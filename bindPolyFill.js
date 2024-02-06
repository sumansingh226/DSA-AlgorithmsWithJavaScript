let name = {
    firstName: "suman",
    lastName: "chauhan",
}

let name2 = {
    firstName: "Summi",
    lastName: "chauhan",
}

let printName = function (homeTown, state, country) {
    console.log(this.firstName + " " + this.lastName + " " + "from" + " " + homeTown + " " + state + " " + country);
}

let printMyName = printName.bind(name, "Tehri", "Uttrakhand")
printMyName("india")

Function.prototype.myBind = function (...args) {
    let obj = this;
    return function (...args2) {
        return obj.apply(args[0], [...args.slice(1), args2]); // Added return statement
    }
}

let printMyName2 = printName.myBind(name2, "Dehradoon", "Uttrakhand")
printMyName2("india")
