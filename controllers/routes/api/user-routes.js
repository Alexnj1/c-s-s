const res = require('express/lib/response');
const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const { Admin, Comment, PostCategory, Post, User } = require('../../models');
const withAuth = require('../../utilities/auth')


// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})





// get one user
router.get('/:id', (req, res) => {

    User.findOne({
        attributes: { exclude: ['password'] },
        where: { id: req.params.id },
        include: [
            {
                model: Post,
                attributes: ['post_title', 'post_content', 'user_id', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_content', 'created_at'],
                include: [{
                    model: Post,
                    attributes: ['title']
                }]
            }]
    })

        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found' });
                return
            }
            res.json(data)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// create an admin
router.post('/', (req, res) => {
    Admin.create({
        name: req.body.name,
        position: req.body.position,
        email: req.body.email,
    })
        .then(data => {
            req.sesssion.save(() => {
                req.session.email = data.email;
                req.session.user_id = data.id;
                req.session.logged_in = true
                res.json(data)

            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})


// admin log in
router.post('/login', (req, res) => {

    Admin.findOne({
        where: { email: req.body.email }
    })
        .then(data => {
            if (!data) {
                res.status(400).json({ message: 'This admin does not exist!' })
                return;
            }

            const correctPass = data.checkPassword(req.body.password);
            if (!correctPass) {
                res.status(400).json({ message: 'Incorrect Password' })
                return
            }
                req.session.save(() => {
                    req.session.email = data.email;
                    req.session.user_id = data.id;
                    req.session.logged_in = true
                    res.json(data)
                })
            })

})


// delete admin

router.delete ('/:id',(req,res) =>{

    Admin.destroy({

    where: {id: req.params.id}
})
.then(data => {
    if(!data){
        res.status(400).json({ message: 'This admin does not exist!' })
        return
    }
    res.json(data)
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
})

})

// logout route
router.post('/logout', (req,res) => {


})

// router.get('/', (req, res) => {



// })
