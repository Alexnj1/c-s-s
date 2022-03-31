const res = require('express/lib/response');
//const PostCategory = require('../../../models/Post-Category');

const router = require('express').Router();
const { Admin, Comment, PostCategory, Post, User } = require('../../../models/relationships');
// const withAuth = require('../../utilities/auth')

//GET ALL COMMENTS


module.exports = router