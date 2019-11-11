//imports
'use strict'
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');
const {database} = require('./keys')
const{isLoggedIn, isNotLoggedIn}= require('./lib/auth');
const Handlebars = require('handlebars');
const cors = require('cors');
const https = require('https');
//inicializaciones
const app = express();
require('./lib/passport');

//configs
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');
Handlebars.registerHelper('selected0', (datos)=> {
    if(datos.disponible != '')
    {
        return 'selected'; 
    }
    else{

    }
})
//middlewares
app.use(session({
    secret: 'TeBochaGrispi3',
    resave: false,
    cookie:{
        maxAge: 30*60
    },
    saveUninitialized: false,
    store: MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors({
    allowedHeaders: 'Access-Control-Allow-Origin: *'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.disable('view cache');

//variables globales
app.use((req, res, next)=>{
    app.locals.success= req.flash('dou');
    app.locals.IsAuth = req.flash('auth');
    app.locals.needsLogin = req.flash('needsLogin');
    app.locals.user = req.user;
    app.locals._user = req.user;
    //app.locals.
    next();
});
app.get('/img/',(req, res)=>{
    res.sendFile('./public/img/EscudoOttoKrause.png');
});
//rutas
app.use(require('./routes/index'));
app.use('/control',isLoggedIn,require('./routes/control'));
app.use('/auth',require('./routes/authentication'));
//archivos publicos
app.use('/public' , express.static(__dirname +'/public'));
//link start!

app.listen(app.get('port'),()=>{
    console.log(`BlbliOK | Servidor iniciado en puerto ${app.get('port')}`);

});