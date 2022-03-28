const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database-connection/connection");

class AdminPost extends Model {}

AdminPost.init(
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
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "admin",
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
    modelName: "admin_post",
    underscored: true,
  }
);

module.exports = AdminPost;
