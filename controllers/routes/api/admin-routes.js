const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const {Admin, Comment, PostCategory, Post, User} = require('../../models');

router.get('/', (req,res) => {
    Admin.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

})


