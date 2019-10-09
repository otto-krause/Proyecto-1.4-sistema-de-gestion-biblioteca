//imports
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');

//inicializaciones
const app = express();

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

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(flash());

//variables globales
app.use((req, res, next)=>{
    app.locals.success=flash('dou');
    next();
});
app.get('/img/',(req, res)=>{
    res.sendFile('./public/img/EscudoOttoKrause.png');
});
//rutas
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/public', require('./routes/srcFiles'));
//archivos publicos
app.use(express.static(path.join(__dirname,'public')));

//link start!
app.listen(app.get('port'),()=>{
    console.log(`BlbliOK | Servidor iniciado en puerto ${app.get('port')}`);

});