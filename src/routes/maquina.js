const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', (req, res) => {
    res.render('maquina/listmaq', {});
})

router.get('/add', (req, res) => {
    res.render('maquina/addmaq');
});

module.exports = router;