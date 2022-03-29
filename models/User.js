const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db/connection");
const bcrypt = require('bcrypt')

class User extends Model {
  async checkPassword(password) {
    const result = await bcrypt.compare(password,this.password)
    return result
  }
}

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
      unique:true,
      validate: {
        isEmail: true,
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
    hooks: {
      async beforeCreate(userData) {
        userData.password = await bcrypt.hash(this.password, 10)
        return userData
      }
    },
    sequelize,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
