const PostCategory = require('../../../models/Post-Category');

const express = require('express')
const router = express.Router();
const { Admin, Comment, Post, User } = require('../../../models/relationships');

router.get('/', (req,res) => {
    PostCategory.findAll({
        attributes:['id', 'category_name' ]
    }).then((data) => {
        res.json(data)
    })
})

module.exports = router