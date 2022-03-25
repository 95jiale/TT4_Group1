module.exports = (sequelize, Sequelize) => {

    const Payment = sequelize.define("Payment", {
      PaymentId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      LoanId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      payment_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      payment_amount: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
    });
    return Payment;
  };