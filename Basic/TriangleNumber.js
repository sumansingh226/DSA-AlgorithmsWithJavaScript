// make stars pattern something like this  :
// 1
// 12
// 123
// 1234


const printSquareStarPatter = ((rows) => {

    for (let i = 0; i < rows; i++) {
        let pattern = ""
        for (let j = 1; j <= i; j++) {
            pattern += `${j}`
        }
        console.log(pattern);
    }
})
let i = 10;
printSquareStarPatter(i)