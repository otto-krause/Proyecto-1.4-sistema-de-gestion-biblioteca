const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('./helpers');


passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done)=>{
    const query = await pool.query("select * from usuarios where username= ?",[username]);
    if(query.length>0)
    {
        const user = query[0];
        const verifPass = await helpers.comparePassword(password, user.password);
        if(verifPass){
            return done(null, user);
        }
        else{
            done(null, false, req.flash('auth','Contraseña incorrecta'));
        }
    }
    else{
        return done(null, false, req.flash('auth','El usuario no existe'))
    }
    
}));

passport.serializeUser((user, done)=>{
    done(null,user);
});

passport.deserializeUser(async(user, done)=>{

    done(null,user);
});
