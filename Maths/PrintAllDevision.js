// if number complete divide but reminder should be zero

const printAllDivisor = (n) => {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
};

printAllDivisor(60);
