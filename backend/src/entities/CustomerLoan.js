module.exports = (sequelize, Sequelize) => {
  const CustomerLoan = sequelize.define("customerLoan", {
    CustomerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    LoanId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
    {
      timestamps: false,
    });
  return CustomerLoan;
}; 