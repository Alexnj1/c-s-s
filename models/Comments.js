// const { error } = require("console");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment_content: {
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
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
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

module.exports = Comment;
