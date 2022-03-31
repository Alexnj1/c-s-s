const router = require('express').Router

const apiRoute = require('./api/')
const dashboard = require('./dashboard')



router.use('/',apiRoute)
router.use('/dashboard',dashboard)

module.exports = router