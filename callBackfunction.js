// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function () {
//     console.log("y");
// });


function clickHandler(event) {
    console.log("button clicked", clickHandler.count++);
}

function attachEventListener() {
    clickHandler.count = 1; // Initialize count as a property of the function
    document.addEventListener("click", clickHandler);
}

function removeEventListener() {
    document.removeEventListener("click", clickHandler);
}

attachEventListener();
// To remove the event listener, call removeEventListener()
// removeEventListener();


