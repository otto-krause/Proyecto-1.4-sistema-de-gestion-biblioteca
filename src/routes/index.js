const express=require('express');
const router = express.Router();
const pool = require('../database.js');
router.get('/', (req,res)=>{
    res.send("CottiGil");
});
router.get('/libros', async (req,res)=>{
    var consulta ="SELECT A.cod_Libro, A.isbn, A.estado, B.titulo, B.Editorial, D.nombre FROM Ejemplar AS A INNER JOIN Libro AS B ON A.cod_Libro = B.cod_Libro INNER JOIN Libro_Autor AS C ON B.cod_Libro=C.cod_Libro INNER JOIN Autor AS D ON C.cod_autor = D.cod_autor;";
    await pool.query(consulta, (err, results, next)=>{
        console.log(results);
        res.render('../views//links/list.hbs', {rows:results});
    }).catch((err)=>{
        throw err;
    });
});

module.exports = router;