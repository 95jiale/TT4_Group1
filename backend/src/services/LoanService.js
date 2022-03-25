const db = require("../entities");

require("./CustomerLoanService");

const getLoanById = async (loanId) => {
  try {
    const loans = await db.loans.findAll({
      where: {
        id: loanId
      }
    })
    return loans
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

exports.getCustomerLoans = async (customerId) => {
  try {

    const CustomerLoan = db.customerLoans;

    // Save User in the database
    const customerLoanMappings = await CustomerLoan.findAll({
      where: {
        CustomerId: customerId
      }
    })

    let loans = [];
    for (let i = 0; i < customerLoanMappings.length; i++) {
      var loanId = customerLoanMappings[i].LoanId
      let loan = await getLoanById(loanId)
      // loans.push({
      //   id: loan.id,
      //   loan_amount
      // })
      console.log(loan)
      loans.push(loan)
    }
    return loans;
    // for (customerLoanMapping in customerLoanMappings) {
    //   console.log(customerLoanMappings.LoanId)
    // }

    // const loans = []
    // for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    //   text += cars[i] + "<br>";
    // }

  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
