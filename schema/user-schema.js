const Sequelize = require('sequelize');
const db = require('../schema/connect-db');

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: true
    },
    stars: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

module.exports = Users