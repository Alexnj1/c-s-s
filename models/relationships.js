const User = require("./database-models/User");
const UserPost = require("./database-models/User-Post");
const PostCategory = require("./database-models/Post-Category");
const UserComment = require("./database-models/User-Comments");
const AdminComment = require("./database-models/Admin-Comments");
const Admin = require("./database-models/Admin");
const AdminPost = require("./database-models/Admin-Post");

//========= HAS MANY ==========
User.hasMany(UserPost, {
  foreignKey: "user_id",
});

User.hasMany(UserComment, {
  foreignKey: 'user_id'
})

Admin.hasMany(AdminPost, {
  foreignKey: "admin_id",
});

Admin.hasMany(AdminComment, {
  foreignKey: 'admin_id'
})

AdminPost.hasMany

PostCategory.hasMany(UserPost, {
  foreignKey: 'post_category_id'
})

PostCategory.hasMany(AdminPost, {
  foreignKey: 'post_category_id'
})

//========= BELONGS TO =========



module.exports = {
  User,
  UserPost,
  PostCategory,
  UserComment,
  AdminComment,
  Admin,
  AdminPost,
};
