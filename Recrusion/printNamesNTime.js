
// //print Name n time 
// function printNameNTime(n, i) {
//     if (i > n) {
//         return;
//     } else {
//         console.log("This is Suman Singh", i);
//         printNameNTime(n, i + 1);
//     }
// }

// printNameNTime(10, 1);

// //print  1 to n integer  time 


// function printN1toN(n, i) {
//     if (i > n) {
//         return;
//     } else {
//         console.log(i);
//         printN1toN(n, i + 1);
//     }
// }

// printN1toN(10, 1);



//print  n to  1integer  time 


function printNto1(n) {
    if (n <= 0) {
        return;
    } else {
        console.log(n);
        printNto1(n - 1);
    }
}

printNto1(10);