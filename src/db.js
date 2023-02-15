// const sequelize = require("sequelize") // Importing an entire library
// const sequelize = require("./index") // Importing from a file

const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = sequelize;
