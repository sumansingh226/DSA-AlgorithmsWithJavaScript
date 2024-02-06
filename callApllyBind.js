
let name = {
    firstName: "suman",
    lastName: "chauhan",

}
let printFullName = function (homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " " + "from" + " " + homeTown + " " + state);
}
printFullName.call(name, "Tehri", "Uttrakhand")

let name2 = {
    firstName: "suman",
    lastName: "chauhan2",
}

printFullName.apply(name, ["Tehri11", "Uttrakhand111"])


let printMyName = printFullName.bind(name2, ["Tehri11", "Uttrakhand111"])
console.log("printMyName", printMyName);