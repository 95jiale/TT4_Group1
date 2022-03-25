const paymentService = require("../services/PaymentService.js");

// Create a Customer to the database.
exports.create = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await paymentService.create(reqBody.lid, reqBody.amount);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Customer."
    });
  }
};