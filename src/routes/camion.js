const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/', (req, res) => {
    res.render('camion/listcam', {});
})

router.get('/add', (req, res) => {
    res.render('camion/addcam');
});

module.exports = router;