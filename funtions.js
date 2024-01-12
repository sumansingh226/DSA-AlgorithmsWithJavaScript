var acc = 1;
a();
b();
console.log(acc);
function a() {
    const acc = 10;
    console.log(acc);
    console.log(bb);
    const bb = 22;
}
function b() {
    const acc = 100;
    console.log(acc);
}
