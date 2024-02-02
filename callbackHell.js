const cart = ["shoes", "pants", "Kurta"];

// Function to simulate API calls with the same function names
function apiOperation(data, callback) {
    setTimeout(function () {
        // Simulating API response
        callback();
    }, 1000 * 5); // Delayed by 1 second for demonstration
}

apiOperation(cart, function createOrder() {
    console.log("Order created");
    apiOperation(null, function proceedToPayment() {
        console.log("Proceeded to payment");
        apiOperation(null, function showOrderSummary() {
            console.log("Order summary displayed");
            apiOperation(null, function updateWallet() {
                console.log("Wallet updated");
                apiOperation(null, function applyDiscount() {
                    console.log("Discount applied");
                    apiOperation(null, function verifyPayment() {
                        console.log("Payment verified");
                        apiOperation(null, function sendConfirmationEmail() {
                            console.log("Confirmation email sent");
                            apiOperation(null, function notifyShipping() {
                                console.log("Shipping notified");
                                apiOperation(null, function trackOrder() {
                                    console.log("Order tracked");
                                    apiOperation(null, function showThankYouPage() {
                                        console.log("Thank you page shown");
                                        apiOperation(null, function requestFeedback() {
                                            console.log("Feedback requested");
                                            apiOperation(null, function showSurvey() {
                                                console.log("Survey shown");
                                                apiOperation(null, function updateCustomerProfile() {
                                                    console.log("Customer profile updated");
                                                    apiOperation(null, function logAnalytics() {
                                                        console.log("Analytics logged");
                                                        console.log("All operations completed!");
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
