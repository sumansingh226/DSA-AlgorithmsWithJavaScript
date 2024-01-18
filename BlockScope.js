// {



//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }


// console.log(a);
// console.log(b);
// console.log(c);

// Shadowing 
var a = 100;
{



    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); 10
    console.log(b); 20
    console.log(c); 30
}
console.log(a); 10

