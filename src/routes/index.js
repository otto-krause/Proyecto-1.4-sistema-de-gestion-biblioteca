const express=require('express');
const router = express.Router();
const pool = require('../database.js');
router.get('/', (req,res)=>{
    res.render('../views/layouts/home.hbs');
});
router.get('/libros', async (req,res)=>{
    
    var consulta = "select * from tabla_Libros";
    await pool.query(String(consulta), (err, rows)=>{
    if(!err)
        res.setTimeout(5000);
        console.log(rows);
        res.render('../views/layouts/list.hbs', {rows});
    }).catch((err)=>{
        next(err);
    });

});

module.exports = router;