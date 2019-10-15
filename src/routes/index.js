const express=require('express');
const router = express.Router();
const pool = require('../database.js');
const {searchFormQuery}=require('../lib/queryhelper')
var datos;

router.get('/', (req,res)=>{
    res.render('../views/layouts/home.hbs');
});
router.get('/libros', async (req,res)=>{
    var consulta = "select * from tabla_Libros where ";
    consulta = searchFormQuery(datos,consulta);    
    await pool.query(String(consulta), (err, rows)=>{
    if(!err)
        res.setTimeout(5000);
        console.log(rows);
        for (const key in rows) {
            if (rows[key].estado===0) {
                rows[key].estado = 'Prestado';
            }
            else{
                rows[key].estado = 'Disponible';
            }
        }
        console.log(datos);
        res.render('../views/layouts/libros.hbs', {rows, datos});
    }).catch((err)=>{
        next(err);
    });
});


router.post('/libros', async(req,res)=>{
    var {disponible,editorial, nombre, apellido,isbn,codlibro,titulo} = req.body;
    if(disponible==='No seleccionar'){
        disponible = null;
    }
    datos = {
        codlibro,
        isbn,
        titulo,
        nombre,
        apellido,
        editorial,
        disponible,
    }
    for (const key in datos) {
        if (datos[key]==='') {
            datos[key]= null;
        }
    }
    var cont=parseInt(0);
    for (const key in datos) {
        if (!datos[key]) {
            cont++;
        }
    }
    console.log(cont);
    if(cont === 7){
        datos = undefined;
    }
    console.log(datos);
    console.log(disponible,editorial,nombre, apellido,isbn,codlibro);
    res.redirect('./libros');
});

module.exports = router;