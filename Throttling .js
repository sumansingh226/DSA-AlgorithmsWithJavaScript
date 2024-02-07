function throttle(func, delay) {
    let lastCalled = 0;

    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCalled < delay) {
            return;
        }
        lastCalled = now;
        func.apply(this, args);
    };
}

function makeApiRequest() {
    // Simulate an API request by logging a message after 1 second
    setTimeout(() => {
        console.log("API request triggered");
    }, 1000);
}

const throttledApiRequest = throttle(makeApiRequest, 1000);

// Add event listener to the button
document.getElementById("triggerButton").addEventListener("click", throttledApiRequest);
