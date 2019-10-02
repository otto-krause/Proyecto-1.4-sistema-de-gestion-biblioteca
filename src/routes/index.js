const express=require('express');
const router = express.Router();
const pool = require('../database.js');
router.get('/', (req,res)=>{
    res.send("CottiGil");
});

router.get('/libros', async (req,res)=>{
    
    var consulta ="select * from tabla_Libros";
    await pool.query(String(consulta), (err, rows)=>{
    res.setTimeout(5000);
    console.log(rows);
    if(err){
        throw err;
    }
    else{
        res.render('../views/links/list.hbs', {rows});
    }
    }).catch((err)=>{
        next(err);
    });
    
});

module.exports = router;