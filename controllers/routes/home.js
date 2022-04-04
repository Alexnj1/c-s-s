const router = require("express").Router();
const sequelize = require("../../models/db/connection");

const {
  Admin,
  Comment,
  PostCategory,
  Post,
  User,
} = require("../../models/relationships");

router.get('/', (req,res) => {
  res.render('landing-page', {loggedIn: req.session.logged_in})
})

router.get("/posts", (req, res) => {
  Post.findAll({
    // where: { Post_category_id: req.params.id },
    attributes: ["post_title", "post_content", "createdAt", "updatedAt"],
  })
    .then((data) => {
      const allPosts = data.map((allPosts) => allPosts.get({ plain: true }));
      res.render("posts", { allPosts, loggedIn: req.session.logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

