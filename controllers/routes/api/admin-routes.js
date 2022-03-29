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


router.get('/', (req,res) => {
    


})




router.get('/:id', (req,res) => {

    Admin.findOne({
    attributes: {exclude: ['password']},
    where: {id: req.params.id},
    include: [
        {
            model: Post,
            attributes: ['post_title','post_content', 'admin_id', 'created_at']
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


router.post('/', (req,res) => {
    Admin.create({
        name: req.body.name,
        position: req.body.position,
        email: req.body.email,
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

})



