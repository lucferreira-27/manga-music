import { Sequelize } from "sequelize"; 
import _ from "dotenv/config.js"; 

const dbName = process.env.DB_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
console.log({dbName, dbUser, dbHost, dbPassword});

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "sqlite", 
  host: dbHost, 
});


export default sequelize