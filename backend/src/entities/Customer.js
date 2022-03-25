module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
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
      type: Sequelize.INTEGER,
      allowNull: false
    },
    hashed_password: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
    {
      timestamps: false,
    });
  return Customer;
};