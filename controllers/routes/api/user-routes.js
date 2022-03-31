const res = require('express/lib/response');
//const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const {Admin, Comment, PostCategory, Post, User} = require('../../../models/relationships');
//const withAuth = require('../../utilities/auth')


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
                },
                {
                    model: Admin,
                    attributes: ['admin_id']
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

// create an user
router.post('/', (req, res) => {
    user.create({
        household_username: req.body.household_username,
        email: req.body.email,
        house_number: req.body.house_number,

    })
        .then(data => {
            req.sesssion.save(() => {
                req.session.household_username = data.household_username;
                req.session.email = data.email;
                req.session.logged_in = true
                res.json(data)

            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})


// user log in
router.post('/login', (req, res) => {

    User.findOne({
        where: { email: req.body.email }
    })
        .then(data => {
            if (!data) {
                res.status(400).json({ message: 'This User does not exist!' })
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


// logout route
router.post('/logout', (req,res) => {


})


// DELETE USER

router.delete ('/:id',(req,res) =>{

    User.destroy({

    where: {id: req.params.id}
})
.then(data => {
    if(!data){
        res.status(400).json({ message: 'This User does not exist!' })
        return
    }
    res.json(data)
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
})

})


module.exports = router

