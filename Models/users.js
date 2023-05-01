const Sequelize = require("sequelize");

const sequelize = require("../utils/dataBase");

const users = sequelize.define("users",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey : true
    },
    userName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    userEmailId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    userPhoneNumber:{
        type:Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    }
});

module.exports = users;