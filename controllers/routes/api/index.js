const { Router } = require('express');
const router = require('express').Router();
const adminRoutes = require('./admin-routes.js');

router.use('./admin',adminRoutes);

module.exports= router