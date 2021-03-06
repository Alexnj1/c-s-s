const router = require("express").Router();
const sequelize = require('../../../models/db/connection')
const {
  Admin,
  Comment,
  PostCategory,
  Post,
  User,
} = require("../../../models/relationships");
const {complaintNotification, complimentNotification} = require('../../../utilities/mailers') 


const withAuth = require('../../../utilities/auth');

//GET ALL POSTS
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    attributes: [
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

    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", withAuth, (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: ["id", "post_title", "post_content", "createdAt", "updatedAt"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_content"],
        include: [
          {
            model: User,
            attributes: [["household_username", "From"]],
          },
          {
            model: Admin,
            attributes: [["name", "From Admin"]],
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
  })

    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a post
router.post("/", withAuth, (req, res) => {
  const postDetails = {
    title: req.body.post_title,
    message: req.body.post_content,
    reason: req.body.reason,
    from: req.session.email,
    user: req.session.username
  };


  Post.create({
    post_title: req.body.post_title,
    post_content: req.body.post_content,
    user_id: req.body.user_id || req.session.user_id,
    admin_id: req.body.admin_id || req.session.admin_id,
    post_category_id: req.body.post_category_id
  })
    .then((data) => res.json(data))
    .then(() => {
      //emails sent to admins for complaint
      if (req.body.post_category_id == 4) {complaintNotification(postDetails)}
      else if (req.body.post_category_id == 5){complimentNotification(postDetails)}
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a post
router.put("/:id", (req, res) => {
  Post.update(
    {
      post_title: req.body.post_title,
      post_content: req.body.post_content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )

    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
