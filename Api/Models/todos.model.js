//UNIVERSAL
const{ DataTypes } = require("sequelize")

//UTILS
const { sequelize } = require("../Utils/database")

const Todo = sequelize.define("todo",{
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    /*chore:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },*/
    content:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },
});

module.exports = {Todo}
