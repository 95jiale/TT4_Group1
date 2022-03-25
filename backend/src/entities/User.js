module.exports = (sequelize, Sequelize) => {

  const Customer = sequelize.define("Customer", {
    CustomerId: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    customer_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    customer_phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    customer_address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    balance: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
  });
  return Customer;
};