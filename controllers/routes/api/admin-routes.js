const express = require("express");
const router = express.Router();
const { Admin, Comment, Post, User } = require("../../../models/relationships");
// const withAuth = require('../../utilities/auth')

//get all admins
router.get("/", (req, res) => {
  Admin.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one admin
router.get("/:id", (req, res) => {
  Admin.findOne({
    attributes: { exclude: ["password"] },
    where: { id: req.params.id },
    include: [
      {
        model: Post,
        attributes: ["post_title", "post_content", "admin_id", "created_at"],
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
      if (!data) {
        res.status(404).json({ message: "No user found" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create an admin
router.post("/", (req, res) => {
  Admin.create({
    name: req.body.name,
    position: req.body.position,
    email: req.body.email,
  })
    .then((data) => {
      req.session.save(() => {
        req.session.email = data.email;
        req.session.logged_in = true;
        res.json(data);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Admin.destroy({
    where: { id: req.params.id },
  })
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "This admin does not exist!" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
