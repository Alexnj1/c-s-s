const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class UserPost extends Model {}

module.exports = UserPost