const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/css/1", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/css/bootstrap.min.css"));
});
router.get("/scripts/4", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/scripts/handlebars.runtime-v4.4.3.js"));    
});
router.get("/scripts/3", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/scripts/bootstrap.min.js"));    
});
router.get("/scripts/1",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/scripts/jquery-3.3.1.slim.min.js"));
});
router.get("/scripts/2",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/scripts/popper.min.js"));
});
router.get('/img/background', (req,res)=>{
    res.sendFile('../public/img/background.png');
});
router.get('/img/escudo',(req, res)=>{
    res.sendFile('../public/img/EscudoOttoKrause.png');
});
router.get('/img/favicon', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/img/book.png'))
});
module.exports = router;