const db = require("../entities");
const bcrypt = require('bcrypt');

// Create and Save a new Customer
exports.create = async (customer_name, customer_phone, customer_address, password) => {
  try {
    const Customer = db.customers;

    const hashedPassword = await bcrypt.hash(password, 10);

    // Save User in the database
    const newCustomer = await Customer.create({
      customer_name: customer_name,
      customer_phone: customer_phone,
      customer_address: customer_address,
      balance: 0,
      hashed_password: hashedPassword,
    });

    return {
      id: newCustomer.id,
      customer_name: newCustomer.customer_name,
      customer_phone: newCustomer.customer_phone,
      customer_address: newCustomer.customer_address,
      balance: newCustomer.balance,
    };
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};