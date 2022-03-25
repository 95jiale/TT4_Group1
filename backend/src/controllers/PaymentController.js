const paymentService = require("../services/PaymentService.js");

// create a payment in the database
exports.create = async (req, res) => {
    // console.log('hello')
  try {
    const reqBody = req.body;
    const data = await paymentService.create(reqBody.lid, reqBody.amount);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating payment."
    });
  }
};