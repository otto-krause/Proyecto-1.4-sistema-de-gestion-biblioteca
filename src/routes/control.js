const express = require('express');
const router = express.Router();
const pool = require('../database.js');

router.get('/add', (req, res)=>{
    res.render('../views/control/add.hbs');
});
router.get('/',(req,res)=>{
    res.render('../views/control/control.hbs');
});
router.post('/add', async(req,res)=>{
    const{titulo, url, descripcion} = req.body;
    const newLink = {
        titulo,
        url,
        descripcion
    };
    await pool.query('INSERT INTO links set ?', [newLink]).catch((err)=>{req.next(err)})
    res.send("recibido");
});

module.exports = router;