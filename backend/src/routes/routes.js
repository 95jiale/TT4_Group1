const userController = require("../controllers/UserController.js");
const authController = require("../controllers/AuthController.js");

module.exports = app => {
  var router = require("express").Router();

  // TODO: Implement jwt validation middleware for routes

  // Create a new user
  router.post("/users", userController.create);

  // User must be able to view their current account balance [2]
  router.post("/balance", userController.retreiveCustomerById);
  // User must be able to view their current loans [3]

  // User must be able to view their loan history [4]


  // // Retrieve all users
  // router.get("/users", users.findAll);

  // // Retrieve a single user with id
  // router.get("/users/:id", users.findOne);

  // // Update a user with id
  // router.put("/users/:id", users.update);

  // // Delete a user with id
  // router.delete("/users/:id", users.delete);

  // // Delete all users
  // router.delete("/users", users.deleteAll);

  // Login new user
  router.post("/auth/login", authController.login);

  app.use('/api', router);
};