const router = require("express").Router();
const sequelize = require("../../models/db/connection");

const {
  Admin,
  Comment,
  PostCategory,
  Post,
  User,
} = require("../../models/relationships");

router.get("'**INSERT POSTS PAGE NAME HERE**'/:id", (req, res) => {
  Post.findAll({
    where: { Post_Category_id: req.params.id },
    attributes: ["post_title", "post_content", "createdAt", "updatedAt"],
  })
    .then((data) => {
      const allPosts = data.map((allPosts) => allPosts.get({ plain: true }));
      res.render("INSERT PAGE NAME", { allPosts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
