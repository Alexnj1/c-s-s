const express = require('express')
const router = express.Router();
const adminRoutes = require('./admin-routes.js');
const userRoutes = require('./user-routes.js')
const commentRoutes = require('./comment-route')
const test = require('./test')
const postRoutes = require('./post-routes.js');

router.use('/test', test)
router.use('/admin', adminRoutes);
router.use('/user',userRoutes)
router.use('/comment',commentRoutes)
router.use('/post',postRoutes)

module.exports = router