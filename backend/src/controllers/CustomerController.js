const customerService = require("../services/CustomerService.js");

// Create a Customer to the database.
exports.create = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await customerService.create(reqBody.customer_name, reqBody.customer_phone, reqBody.customer_address, reqBody.password);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Customer."
    });
  }
};

exports.retreiveCustomerById = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await customerService.retreiveCustomerById(reqBody.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while getting customer by ID"
    });
  }
};