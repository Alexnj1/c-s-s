const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class User extends Model {}

module.exports = User