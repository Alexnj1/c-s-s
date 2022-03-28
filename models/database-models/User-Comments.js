const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class UserComment extends Model {}

UserComment.init(
    {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        comment_content: {
            type: DataTypes.STRING,
            allowNull:false
        },
        user_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user_post',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_comment'
    }
)

module.exports = UserComment