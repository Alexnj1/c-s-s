const router = require('express').Router();
const sequelize = require('../../models/db/connection')

const { Admin, Comment, PostCategory, Post, User } = require('../../models/relationships');



//get all posts
router.get('/', (req,res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        }
    })
    .then(data => {
        const userData = data.get({plain:true}) 
        console.log(req.session.logged_in)
        console.log(data)
        res.render('dashboard', {userData, loggedIn: req.session.logged_in})
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