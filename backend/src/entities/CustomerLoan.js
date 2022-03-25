module.exports = (sequelize, Sequelize) => {

    const CustomerLoan = sequelize.define("CustomerLoan", {
      
     CustomerLoanId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      LoanId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
    return CustomerLoan;
  };