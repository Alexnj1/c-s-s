const router = require("express").Router();
const {
  Admin,
  Comment,
  PostCategory,
  Post,
  User,
} = require("../../../models/relationships");
const withAuth = require('../../../utilities/auth')

//GET ALL COMMENTS

router.get("/", withAuth, (req, res) => {
  Comment.findAll({
    attributes: ["id", "comment_content"],
    include: [
      {
        model: Post,
        attributes: ["post_title", "post_content"],
      },
      {
        model: User,
        attributes: ["household_username"],
      },
      {
        model: Admin,
        attributes: ["name", "position"],
      },
    ],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a comment

router.post("/", withAuth, (req, res) => {
  Comment.create({
    comment_content: req.body.comment_content,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
    admin_id: req.session.admin_id,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a comment

router.put("/:id", (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete a comment

router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ status: "success" });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
