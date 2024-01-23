function outset() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        return inner;
    }
    return outer;
}
let a = 100;
var close = outset()("hello world");
close()
