const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db/connection");

class Admin extends Model {}

Admin.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail: true,
        contains: '@luxuryadmin.com',
        notContains: '@luxury.com'
      },
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [5]
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "admin",
  }
);

module.exports = Admin;
