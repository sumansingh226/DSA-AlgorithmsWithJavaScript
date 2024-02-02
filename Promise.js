const cart = ["shoes", "pants", "Kurta"];

// Function to simulate API calls with the same function names
function apiOperation(data) {
    return new Promise((resolve) => {
        setTimeout(function () {
            // Simulating API response
            resolve();
        }, 1000 * 5); // Delayed by 5 seconds for demonstration
    });
}

apiOperation(cart)
    .then(() => {
        console.log("Order created");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Proceeded to payment");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Order summary displayed");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Wallet updated");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Discount applied");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Payment verified");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Confirmation email sent");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Shipping notified");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Order tracked");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Thank you page shown");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Feedback requested");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Survey shown");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Customer profile updated");
        return apiOperation(null);
    })
    .then(() => {
        console.log("Analytics logged");
        console.log("All operations completed!");
    });
