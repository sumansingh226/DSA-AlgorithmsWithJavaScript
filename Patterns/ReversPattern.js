// *****
// ****
// ***
// **
// *

const pattern1 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = "";
        for (let j = 0; j < n - i + 1; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
};

// pattern1(5);

const pattern2 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = 1; j <= n - i + 1; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
};

// pattern2(5);

const pattern3 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = "";

        // Add spaces before the asterisks
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " ";
        }

        // Add asterisks
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += "*";
        }

        // Add spaces after the asterisks
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " ";
        }

        console.log(pattern);
    }
};

// pattern3(5);

const pattern4 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = "";

        // Add spaces before the asterisks
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }

        // Add asterisks
        for (let j = 0; j < 2 * (n - i) - 1; j++) {
            pattern += "*";
        }

        // Add spaces after the asterisks
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }

        console.log(pattern);
    }
};

// pattern4(5);
// *********
// *******
//  *****
//   ***
//    *
const pattern5 = ((n) => {

    for (let i = 0; i < n; i++) {
        let pattern = "";

        // Add spaces before the asterisks
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " ";
        }

        // Add asterisks
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += "*";
        }

        // Add spaces after the asterisks
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " ";
        }

        console.log(pattern);
    }
    for (let i = 0; i < n; i++) {
        let pattern = "";

        // Add spaces before the asterisks
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }

        // Add asterisks
        for (let j = 0; j < 2 * (n - i) - 1; j++) {
            pattern += "*";
        }

        // Add spaces after the asterisks
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }

        console.log(pattern);
    }
})

pattern5(6);
