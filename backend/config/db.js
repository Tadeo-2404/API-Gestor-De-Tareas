import { Sequelize } from "sequelize"; //importing sequelize to manipulate
import dotenv from 'dotenv/config'; //telling sequelize to read dotenv

//creating an instance of the db connection
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: '3306',
    logging: false
});

export default db;