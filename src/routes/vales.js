const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', (req, res) => {
    res.render('vales/listvales', {});
})

router.get('/add', (req, res) => {
    res.render('vales/addvales');
});

router.get('/ver', (req, res) => {
    res.render('vales/vervales');
});

module.exports = router;