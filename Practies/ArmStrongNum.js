//  if n = 371  then if 3qb +7qb+1qb  =371 then armstrong  nums

function isArmStrong(num) {
    let sum = 0;
    let n = num;
    while (n > 0) {
        let digit = n % 10;
        sum += Math.pow(digit, 3);
        n = Math.floor(n / 10);

    }
    if (num === sum) {
        return `${num} is armStrong number`;
    }
    else {
        return `${num} is not armStrong number`;
    }

}


const n = 372;
const result = isArmStrong(n);
console.log(result);

