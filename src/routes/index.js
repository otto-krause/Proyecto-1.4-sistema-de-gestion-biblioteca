const express=require('express');
const router = express.Router();
const pool = require('../database.js');
const {searchFormQuery}=require('../lib/queryhelper');
const fs = require('fs');
const path = require('path');
const hs = require('handlebars');
var datos;


router.get('/', (req,res)=>{
       res.render('../views/layouts/home.hbs');
});
router.get('/libros/list.hbs', (req,res)=>{ 
    var view;
    fs.readFile(path.join(__dirname ,'../views/partials/list.hbs'), function(err, data){
        if (!err) {
          // make the buffer into a string
          view = data.toString();
          res.send(view);
          console.log(view);
          // call the render function
        } else {
          console.log('Archivo no encontrado');
          res.sendStatus('404');
        }
    });
  
});
router.get('/libros', async (req,res)=>{
    var consulta = "select * from tabla_Libros where ";
    consulta = searchFormQuery(datos,consulta);    
    await pool.query(consulta, (err, rows)=>{
    if(!err)
        res.setTimeout(5000);
        
        for (const key in rows) {
            if (rows[key].estado===0) {
                rows[key].estado = 'Prestado';
            }
            else{
                rows[key].estado = 'Disponible';
            }
        }
        rows.user = req.user;
        console.log(rows);
        console.log(rows.user);
        res.render('../views/layouts/libros.hbs', {rows, datos});
    }).catch((err)=>{
        done(err);
    });
});
router.get('/test', (req, res)=>{
    res.render('../views/test.hbs');
});
router.get('/test/data',(req,res)=>{
    res.send({a:1, b:2, c: 3, d:4, e:5});
});
//Ajax POST request
//router.get('/libros/search', (req, res)=>{});
router.get('/libros/search', async(req, res)=>{
    console.log(req.query.form);
    datos = req.query.form;
    var objeto={};
    datos.forEach(x => {
        objeto[x.name] = x.value;
    });
    console.log (objeto);
    //Convirtiendo JSON con String as property name a JSON de JavaScript para que funcione searchFormQuery() [Me tomó literalmente una hora entender]
    /*datos = JSON.stringify(datos);
    datos = JSON.parse(datos);
    var objeto={};
    for (let i = 0; i < 7; i++) {
        let aux = datos[`form[${i}][name]`];
        objeto[aux] = datos[`form[${i}][value]`]; 
    }
    console.log(objeto);*/
    datos = objeto;
    if(datos.disponible==='No seleccionar'){
        datos.disponible = null;
    }
    let cont=parseInt(0);
    console.log(cont);
    for (const key in datos) {
        if (!datos[key]) {
            cont++;
        }
    }
    console.log(cont);
    if(cont === 7){
        datos = undefined;
    }
    
   var consulta = "select * from tabla_Libros where ";
    consulta = searchFormQuery(datos,consulta);    
    await pool.query(consulta, (err, rows)=>{
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
        res.send({rows, datos, user: req.user});
    }).catch((err)=>{
        done(err);
    });
    res.end();
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