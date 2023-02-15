const sequelize = require("./db"); // Importing my connection from db.js
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  rating: DataTypes.NUMBER,
});

module.exports = { User }; // {User: User}
