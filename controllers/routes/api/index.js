//DEPENDENCIES
const express = require("express");
const router = express.Router();

//ROUTE FILES
const adminRoutes = require("./admin-routes.js");
const userRoutes = require("./user-routes.js");
const commentRoutes = require("./comment-route");
const postRoutes = require("./post-routes.js");
const PostCategoryRoutes = require("./post-category");

router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/cat", PostCategoryRoutes);

module.exports = router;
