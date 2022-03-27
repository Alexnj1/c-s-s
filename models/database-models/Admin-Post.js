const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class AdminPost extends Model {}

module.exports = AdminPost