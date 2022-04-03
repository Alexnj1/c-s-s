const express = require("express");
const router = express.Router();
const {
  PostCategory,
  Admin,
  Comment,
  Post,
  User,
} = require("../../../models/relationships");

router.get("/", (req, res) => {
  PostCategory.findAll({
    attributes: ["id", "category_name"],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  PostCategory.findOne({
    attributes: ["id", "category_name"],
    where: {
      id: req.params.id,
    },
    include: {
      model: Post,
      attributes: ["post_title"],
      include: [
        {
          model: User,
          attributes: [["household_username", "Posted By"]],
        },
        {
          model: Admin,
          attributes: [["name", "Posted By"], "position"],
        },
      ],
    },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  PostCategory.create({
    category_name: req.body.name,
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
