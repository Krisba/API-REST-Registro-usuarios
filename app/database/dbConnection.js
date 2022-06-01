const { Sequelize } = require('sequelize');


const sequelize = new Sequelize( process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'mysql',
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;