const req = require('express/lib/request');
const res = require('express/lib/response');
//const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const { Admin, Comment, PostCategory, Post, User } = require('../../../models/relationships');
//const withAuth = require('../../utilities/auth')

//GET ALL POSTS
router.get('/', (req, res) => {

    Post.findAll({
        attributes: ['post_title', 'post_content', 'createdAt', 'updatedAt'],
        include: [
            {
                model: User,
                attributes: ['household_username']
            },
            {
                model: Admin,
                attributes: ['name', 'position',],
            },
        ]
    })

        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})

router.get('/:id', (req, res) => {

    Post.findOne({
        where: { id: req.params.id },
        attributes: ['post_title', 'post_content', 'createdAt', 'updatedAt'],
        include: [
            {
                model: User,
                attributes: ['household_username']
            },
            {
                model: Admin,
                attributes: ['name', 'position',],
            },
        ]
    })

        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


//create a post
router.post('/', (req, res) => {
    Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        user_id: req.body.user_id,
        admin_id: req.body_user.id,
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


//update a post
router.put('/:id', (req, res) => {
    Post.update({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
    })

        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


//delete a post

module.exports = router