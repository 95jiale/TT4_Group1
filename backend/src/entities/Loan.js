module.exports = (sequelize, Sequelize) => {

  const Loan = sequelize.define("Loan", {
    loan_amount: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
  },
    {
      timestamps: false,
    });
  return Loan;
};