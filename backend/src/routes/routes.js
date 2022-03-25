
const authController = require("../controllers/AuthController.js");

const customerController = require("../controllers/CustomerController.js");
const paymentController = require("../controllers/PaymentController.js");
const loanController = require("../controllers/LoanController.js");

module.exports = app => {
  var router = require("express").Router();

  // TODO: Implement jwt validation middleware for routes

  // Create a new customer
  router.post("/customers", customerController.create);

  // Get all loans for a customer
  router.post("/loans", loanController.retreiveCustomerLoans);

  // Login new user
  router.post("/auth/login", authController.login);

  // create a new payment
  router.post("/Payment", paymentController.create);

  app.use('/api', router);
};