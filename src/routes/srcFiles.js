const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/css/1", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/css/bootstrap.min.css"));
});
router.get("/scripts/1", (req, res)=>{
    res.sendFile(path.join(__dirname,"../public/scripts/bootstrap.min.js"));    
});
router.get("/scripts/2",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/scripts/jquery-3.3.1.slim.min.js"));
});
router.get("/scripts/3",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/scripts/popper.min.js"));
});

module.exports = router;