const customerLoanService = require("../services/CustomerLoanService.js");

// Create a User to the database.
exports.create = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await customerLoanService.create(reqBody.customerloanid, reqBody.customerid, reqBody.loanid);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the User."
    });
  }
};
