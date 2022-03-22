const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', (req, res) => {
    res.render('remitos/listremitos', {});
})

router.get('/add', (req, res) => {
    res.render('remitos/addremitos');
});

router.get('/ver', (req, res) => {
    res.render('remitos/verremito');
});

module.exports = router;