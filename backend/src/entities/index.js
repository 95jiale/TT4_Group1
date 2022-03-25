const { env } = require('../config/env');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.db.name, env.db.username, env.db.password, {
  host: env.db.host,
  dialect: 'mysql',
  pool: {
    max: 400,
    min: 0,
    acquire: 20000,
    idle: 10000,
    evict: 1000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.users = require("./User.js")(sequelize, Sequelize);
db.customers = require("./Customer.js")(sequelize, Sequelize);
db.payments = require("./Payment.js")(sequelize, Sequelize);
module.exports = db;
