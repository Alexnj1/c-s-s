const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database-connection/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "admin",
        key: "id",
      },
    },
    post_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post_category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "post",
    underscored: true,
    validate: {
      userOrAdmin() {
        if (this.user_id && this.admin_id) {
          throw new Error("Cannot have both admin and user ids!");
        } else if (!this.user_id && !this.admin_id) {
          throw new Error("Must have either admin.id or user.id!");
        }
      },
    },
  }
);

module.exports = Post;
