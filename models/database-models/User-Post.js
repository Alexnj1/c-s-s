const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database-connection/connection");

class UserPost extends Model {}

UserPost.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "user_post",
    underscored: true,
  }
);

module.exports = UserPost;
