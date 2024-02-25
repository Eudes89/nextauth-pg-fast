const Sequelize = require('sequelize');
const db = require('../schema/connect-db');

const Commits = db.define('commits', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    text: {
        type: Sequelize.CHAR(300),
        allowNull: false
    },
    
})

module.exports = Commits