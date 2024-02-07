
//print Name n time 
function printNameNTime(n, i) {
    if (i > n) {
        return;
    } else {
        console.log("This is Suman Singh", i);
        printNameNTime(n, i + 1);
    }
}

printNameNTime(10, 1);

//print  n integer  time 


function printNameTime(n, i) {
    if (i > n) {
        return;
    } else {
        console.log(i);
        printNameTime(n, i + 1);
    }
}

printNameTime(10, 1);