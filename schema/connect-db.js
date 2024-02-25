const Sequelize = require('sequelize');

const db = 
new Sequelize(`${process.env.POSTGRES_URL}`, {dialect: 'postgres'});

module.exports = db