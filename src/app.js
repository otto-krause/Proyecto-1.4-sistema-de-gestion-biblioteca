//imports
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
    if(!datos.disponible)
    {
        return 'selected';  
    }
    return;
})
Handlebars.registerHelper('selected1', (datos)=> {
    if(datos.disponible ===1){
      return 'selected';  
    }
    return;
})
Handlebars.registerHelper('selected2', (datos)=> {
    if(datos.disponible ===0 )
    {
        return 'selected';  
      }
    return;
})
//middlewares
app.use(session({
    secret: 'TeBochaGrispi3',
    resave: false,
    saveUninitialized:false,
    store: MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//variables globales
app.use((req, res, next)=>{
    app.locals.success= req.flash('dou');
    app.locals.IsAuth = req.flash('auth');
    app.locals.needsLogin = req.flash('needsLogin');
    app.locals.user = req.user;
    next();
});
app.get('/img/',(req, res)=>{
    res.sendFile('./public/img/EscudoOttoKrause.png');
});
//rutas
app.use(require('./routes/index'));
app.use('/auth',require('./routes/authentication'));
app.use('/control',isLoggedIn,require('./routes/control'));
app.use('/public', require('./routes/srcFiles'))
//archivos publicos
app.use(express.static(path.join(__dirname,'public')));

//link start!
app.listen(app.get('port'),()=>{
    console.log(`BlbliOK | Servidor iniciado en puerto ${app.get('port')}`);

});