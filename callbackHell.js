const cart = ["shoes", "pants", "Kurta"];

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet(function () {
                api.applyDiscount(function () {
                    api.verifyPayment(function () {
                        api.sendConfirmationEmail(function () {
                            api.notifyShipping(function () {
                                api.trackOrder(function () {
                                    api.showThankYouPage(function () {
                                        api.requestFeedback(function () {
                                            api.showSurvey(function () {
                                                api.updateCustomerProfile(function () {
                                                    api.logAnalytics(function () {
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
