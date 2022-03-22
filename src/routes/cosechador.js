const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('cosechador/add');
});

router.post('/add', async (req, res)=>{
    const { nombre, apellido, nacionalidad, fecha_nacimiento, direccion, cuil, dni, telefono} = req.body;
    const newCosechador = {
        nombre,
        apellido,
        nacionalidad,
        fecha_nacimiento,
        direccion,
        cuil,
        dni,
        telefono
    }
    await pool.query('INSERT INTO cosechador SET ?', [newCosechador]);
    req.flash('success', 'Cosechador dado de alta correctamente!');
    res.redirect('/cosechador');
});

router.get('/', async (req, res)=>{
    const cosechadores = await pool.query('SELECT * FROM cosechador');
    res.render('cosechador/list', { cosechadores });
});

router.get('/delete/:id_cosechador', async (req, res) => {
    const { id_cosechador } = req.params;
    await pool.query('DELETE FROM cosechador WHERE id_cosechador = ?', [id_cosechador]);
    req.flash('success', 'Cosechador eliminado correctamente!');
    res.redirect('/cosechador');
});

router.get('/edit/:id_cosechador', async (req, res) => {
    const { id_cosechador } = req.params;
    const cosechadores = await pool.query('SELECT * FROM cosechador WHERE id_cosechador = ?', [id_cosechador]);
    res.render('cosechador/edit', {cosechador: cosechadores[0]});
});

router.post('/edit/:id_cosechador', async (req, res) => {
    const { id_cosechador } = req.params;
    const { nombre, apellido, nacionalidad, fecha_nacimiento, direccion, cuil, dni, telefono } = req.body;
    const newCosechador = {
        nombre,
        apellido,
        nacionalidad,
        fecha_nacimiento,
        direccion,
        cuil,
        dni,
        telefono
    };
    await pool.query('UPDATE cosechador set ? WHERE id_cosechador = ?', [newCosechador,id_cosechador]);
    req.flash('success', 'Modificaciones realizadas correctamente!');
    res.redirect('/cosechador');
});

router.get('/pago', (req, res) => {
    res.render('cosechador/pago');
});

router.get('/pago/:id_cosechador', async (req, res) => {
    const { id_cosechador } = req.params;
    res.render('cosechador/pago', {cosechador: cosechadores[0]});
});

router.post('/pago/:id_cosechador', async (req, res) => {
    const { id_cosechador } = req.params;
    const { nombre, apellido, nacionalidad, fecha_nacimiento, direccion, cuil, dni, telefono } = req.body;
});

module.exports = router;