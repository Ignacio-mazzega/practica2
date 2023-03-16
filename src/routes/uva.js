const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../lib/auth');

const pool = require('../database');

router.get('/', isLoggedIn, (req, res) => {
    res.render('uva/listuva', {});
})

router.get('/add', isLoggedIn, (req, res) => {
    res.render('uva/adduva');
});

module.exports = router;