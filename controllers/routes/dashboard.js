const router = require("express").Router();
const sequelize = require("../../models/db/connection");
const withAuth = require('../../utilities/auth')

const {
  Admin,
  Comment,
  PostCategory,
  Post,
  User,
} = require("../../models/relationships");

//get all posts
router.get("/", withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: { id: req.session.user_id },
    include: [
      {
        model: Post,
        attributes: [
          "id",
          "post_title",
          "post_content",
          "user_id",
          "created_at",
        //   [
        //     sequelize.literal(
        //       "(SELECT COUNT (*) FROM comment WHERE comment.post_id = id)"
        //     ),
        //     "comment_count",
        //   ],
        ],
      },
      {
        model: Comment,
        attributes: ["id", "comment_content", "created_at"],
        include: [
          {
            model: Post,
            attributes: ["post_title"],
          },
        ],
      },
    ],
  })
    .then((data) => {
      const userData = data.get({ plain: true });
      console.log(req.session.logged_in);
      console.log(userData);
      res.render("dashboard", { userData, loggedIn: req.session.logged_in });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/add", withAuth, (req, res) => {
  res.render("add-post", { loggedIn: req.session.logged_in });
});

module.exports = router;
