const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', (req, res) => {
    res.render('uva/listuva', {});
})

router.get('/add', (req, res) => {
    res.render('uva/adduva');
});

module.exports = router;