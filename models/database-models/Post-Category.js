const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class PostCategory extends Model {}

module.exports = PostCategory