const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database-connection/connection')

class AdminComment extends Model {}

AdminComment.init(
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
        admin_id: {
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
                model: 'admin_post',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'admin_comment'
    }
)

module.exports = AdminComment