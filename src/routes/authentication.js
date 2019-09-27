const express = require('express');
const router = express.Router();

router.get("/signup",(req,res)=>{
    res.render("../views/auth/signup.hbs");
});

router.post("/signup",(req,res)=>{

});

module.exports = router;