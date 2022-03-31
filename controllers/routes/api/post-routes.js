const res = require('express/lib/response');
//const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const { Admin, Comment, PostCategory, Post, User } = require('../../../models/relationships');
//const withAuth = require('../../utilities/auth')

//GET ALL POSTS
router.get('/',(req,res) => {

    Post.findAll({
        attributes: ['post_title', 'post_content','createdAt', 'updatedAt'],
        include: [
            {
            model: User,
            attributes: ['household_username']
        },
        {
            model: Admin,
            attributes: ['name', 'position', ],
        },
    ]
    })

    .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})

router.ger ('/:id',(req,res) => {

    Post.findOne({
        where: {id: req.params.id},
        attributes: ['post_title', 'post_content','createdAt', 'updatedAt'],
        include: [
            {
            model: User,
            attributes: ['household_username']
        },
        {
            model: Admin,
            attributes: ['name', 'position', ],
        },
    ]
    })

    .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = router