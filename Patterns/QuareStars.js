// make stars pattern something like this  :
// ****
// ****
// ****
// ****

const printSquareStarPatter = ((rows) => {

    for (let i = 0; i < rows; i++) {
        let pattern = '';
        for (let j = 0; j < 5; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
})
let i = 5;
printSquareStarPatter(i)