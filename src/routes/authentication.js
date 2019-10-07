const express = require('express');
const router = express.Router();

router.get("/signup",(req,res)=>{
    res.render("../views/auth/signup.hbs");
});


router.get("/login",(req,res)=>{
    res.render("../views/auth/login.hbs");
});

router.post("/login", (req,res)=>{
    var {user, password} = req.body;
    console.log(user +" "+ password);
});
module.exports = router;