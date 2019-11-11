const express = require('express');
const router = express.Router();
const passport = require('passport');
const pool = require('../database.js');
const helpers = require('../lib/helpers');
const {isLoggedIn, isNotLoggedIn} = require('../lib/auth');

router.get('/', (req,res)=>{

});
router.get("/logout",(req,res)=>{
    req.logOut();
    res.redirect('/');
});

router.get("/login", isNotLoggedIn,(req,res)=>{
    res.render("../views/auth/login.hbs");
});

router.post("/login", async(req,res,next)=>{
        passport.authenticate('local.signin',{
            successRedirect: '/control',
            failureRedirect: '/auth/login',
            failureFlash: true
        })(req,res,next);  
});

module.exports = router;