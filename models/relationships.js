const User = require("./User");
const Post = require("./Post");
const PostCategory = require("./Post-Category");
const Comment = require("./Comments");
const Admin = require("./Admin");

//========= HAS MANY ==========
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
})

Admin.hasMany(Post, {
  foreignKey: "admin_id",
});

Admin.hasMany(Comment, {
  foreignKey: 'admin_id'
})

PostCategory.hasMany(Post, {
  foreignKey: 'post_category_id'
})

//========= BELONGS TO =========

Post.belongsTo(User, {
  foreignKey: 'user_id',
})

Post.belongsTo(Admin, {
  foreignKey: 'admin_id'
})

Post.belongsTo(PostCategory, {
  foreignKey: 'post_category_id'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

Comment.belongsTo(Admin, {
  foreignKey: 'admin_id'
})

module.exports = {
  User,
  Post,
  PostCategory,
  Comment,
  Admin,
};
