function printNameNTime(n, i) {
    if (i >= n) {
        return;
    } else {
        console.log("This is Suman Singh", i);
        printNameNTime(n, i + 1);
    }
}

printNameNTime(10, 1);
