const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class Comment extends Model {}

module.exports = Comment