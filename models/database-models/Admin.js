const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class Admin extends Model {}

module.exports = Admin