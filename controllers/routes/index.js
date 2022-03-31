const router = require('express').Router()

const apiRoute = require('./api/')
const dashboard = require('./dashboard')
const homepage = require('./homepage')




router.use('/api',apiRoute)
router.use('/dashboard',dashboard)
router.use('/homepage', homepage)

module.exports = router