const loanService = require("../services/LoanService.js");

exports.retreiveCustomerLoans = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await loanService.getCustomerLoans(reqBody.customerId);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while getting customer by ID"
    });
  }
};