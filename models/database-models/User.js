const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database-connection/connection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    household_username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    house_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
