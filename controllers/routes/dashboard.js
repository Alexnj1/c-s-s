const router = require('express').Router();
const sequelize = require('../../models/db/connection')

const { Admin, Comment, PostCategory, Post, User } = require('../../models/relationships');



//get all posts
router.get('/', (req,res) => {
    Post.findAll({
        where: {user_id: req.session.user_id},
        attributes: ['post_title', 'post_content', 'createdAt', 'updatedAt']
    })
    .then(data => {
        const allPosts = data.map(allPosts => allPosts.get({plain:true})) 
        res.render('dashboard',{allPosts, loggedIn: true})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})



router.get('/login',(req,res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('login');
})


module.exports = router