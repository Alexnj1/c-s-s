const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db/connection");

class PostCategory extends Model {}

PostCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post_category",
  }
);

module.exports = PostCategory;
