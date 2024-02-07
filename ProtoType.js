
const arr = ["Suman", "singh", "chauhan"];

function multiplyBy5(n) {
    return n * 5
}

console.log(multiplyBy5(5));
console.log(multiplyBy5.myName = "suman");


function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`score  is  ${this.score}`);
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()


