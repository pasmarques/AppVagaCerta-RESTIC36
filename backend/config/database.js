const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './Database.sqlite' 
});

module.exports = sequelize;