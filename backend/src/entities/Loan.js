module.exports = (sequelize, Sequelize) => {

    const Loan = sequelize.define("Loan", {

      LoanId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },

      loan_amount: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
    });
    return Loan;
  };