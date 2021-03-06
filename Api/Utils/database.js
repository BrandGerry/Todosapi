const { Sequelize } = require("sequelize")

//Liberia dotenv
const dotenv = require("dotenv")

dotenv.config({path:"./config.env"})

const sequelize = new Sequelize ({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB,
    dialect: "postgres",
})

module.exports = {sequelize}