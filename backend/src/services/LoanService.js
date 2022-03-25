const db = require("../entities");

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
      console.log(loan)
      loans.push(loan)
    }
    return loans;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
