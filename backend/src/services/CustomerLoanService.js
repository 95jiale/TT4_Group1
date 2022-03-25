const db = require("../entities");

// Create and Save a new User
exports.create = async (customerloanid, customerid, loanid) => {
  try {
    const CustomerLoan = db.CustomerLoan;

    // Save User in the database
    const newCustomerLoan = await CustomerLoan.create({
      CustomerLoanId: customerloanid,
      CustomerId: customerid,
      LoanId: loanid,
    });

    return {
        CustomerLoanId: CustomerLoan.CustomerLoanId,
        CustomerId: CustomerLoan.CustomerId,
        LoanId: CustomerLoan.LoanId,
    };
    
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};