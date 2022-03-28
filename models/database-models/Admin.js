const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

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
        modelName: "admin",
      }
)

module.exports = Admin