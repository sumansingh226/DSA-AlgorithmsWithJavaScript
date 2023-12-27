// make stars pattern something like this  :
// *
// **
// ***
// ****

const printSquareStarPatter = ((rows) => {

    for (let i = 0; i < rows; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
})
let i = 10;
printSquareStarPatter(i)