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

router.get("/", (req, res) => {
  res.render("landing-page", { loggedIn: req.session.logged_in });
});

router.get("/posts/:id", withAuth, (req, res) => {
  Post.findAll({
    where: { post_category_id: req.params.id },
    attributes: [
      "id",
      "post_title",
      "post_content",
      "createdAt",
      "updatedAt",
      [
        sequelize.literal(
          "(SELECT COUNT (*) FROM comment  WHERE comment.post_id = post.id)"
        ),
        "comment_count",
      ],
    ],
    include: [
      {
        model: User,
        attributes: ["household_username"],
      },
      {
        model: Admin,
        attributes: ["name", "position"],
      },
      {
        model: PostCategory,
        attributes: ["category_name"],
      },
    ],
  })
    .then((data) => {
      const allPosts = data.map((allPosts) => allPosts.get({ plain: true }));
      res.render("posts", { allPosts, loggedIn: req.session.logged_in });
      console.log(allPosts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/post/:id", withAuth, (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_content", "createdAt"],
        separate: true,
        order:[['createdAt','DESC']],
        include: [
          {
            model: User,
            attributes: ["household_username"],
          },
          {
            model: Admin,
            attributes: ["name"],
          },
        ],
      },
      {
        model: User,
        attributes: ["household_username"],
      },
      {
        model: Admin,
        attributes: ["name", "position"],
      },
      {
        model: PostCategory,
        attributes: ["category_name"],
      },
    ],
  }).then((data) => {
    const singlePost = data.get({ plain: true });
    console.log(singlePost)
    res.render("single-post", { singlePost, loggedIn: req.session.logged_in });
  });
});

module.exports = router;
