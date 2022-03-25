const jwt = require('jsonwebtoken');
const { env } = require('../config/env');
const customerService = require("./CustomerService.js");
const bcrypt = require('bcrypt');

exports.login = async (phoneNumber, password) => {
  try {
    const user = await customerService.findOne(phoneNumber);
    const passwordMatch = await bcrypt.compare(password, user.hashed_password);

    if (!passwordMatch) {
      throw new Error('Invalid password for account!');
    }

    const token = jwt.sign(
      { user_id: phoneNumber },
      env.jwt.secret,
      { expiresIn: "2h" }
    );

    return {
      id: user.id,
      customer_name: user.customer_name,
      customer_phone: user.customer_phone,
      customer_address: user.customer_address,
      token
    };

  } catch (err) {
    console.log(err.message);
    throw err;
  }
}