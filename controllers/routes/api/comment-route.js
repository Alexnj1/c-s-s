const res = require('express/lib/response');
//const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const { Admin, Comment, PostCategory, Post, User } = require('../../../models/relationships');
// const withAuth = require('../../utilities/auth')

//GET ALL COMMENTS

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['comment_content'],
        include: [
            {
                model: Post,
                attributes: ['post_title', 'post_content']
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

router.post('/', (req, res) => {
    Comment.create({
        comment_content: req.body.comment_content,
        user_id: req.body.user_id,
        post_id: req.body.post_id
        //admin_id: req.params.user_id,
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

//update a comment

router.put('/:id', (req, res) => {

    Comment.update(
        { comment_content: req.params.comment_content },
        {
            where: {
                id: req.params.id
            }
        })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

})


//delete a comment

// router.delete(
//     Comment.destroy(

//     )
// )

module.exports = router