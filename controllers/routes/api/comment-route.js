const res = require('express/lib/response');
//const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const { Admin, Comment, PostCategory, Post, User } = require('../../../models/relationships');
// const withAuth = require('../../utilities/auth')

//GET ALL COMMENTS

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['comment_content', 'user_id', 'admin_id',],
        include: [
            {
                model: Post,
                attributes: ['post_title','post_content']
            },
            {
                model: User,
                attributes: ['household_username']
            },
            {
                model: Admin,
                attributes: ['name', 'position',],
            }]
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

})

// create a comment

router.post('/:id', (req,res) => {
    Comment.create({
        comment_content: req.params.comment_content,
        user_id: req.params.user_id,
        admin_id: req.params.user_id,
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

//update a comment

router.ps


//delete a comment


module.exports = router