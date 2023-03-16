const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');
const bodyParser = require('body-parser');

const { database } = require('./keys');

//Initializations
const app = express();
require('./lib/passport');
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({                           //Utilice el método app.engine(ext, callback) para crear su propio motor de plantilla. ext hace referencia a la extensión de archivo y callback es la función de motor de plantilla, que acepta los siguientes elementos como parámetros: la ubicación del archivo, el objeto options y la función callback.
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(session({
    secret: 'proyectocosecha',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Global Variables
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});


//Public
app.use(express.static(path.join(__dirname, 'public'))); 

//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication'));
app.use('/cosechador', require('./routes/cosechador'));
app.use('/camion', require('./routes/camion'));
app.use('/maquina', require('./routes/maquina'));
app.use('/uva', require('./routes/uva'));
app.use('/remitos', require('./routes/remitos'));
app.use('/vales', require('./routes/vales'));

//Starting the application
app.listen(app.get('port'), () => {
    console.log('Port: ', app.get('port'));
});

module.exports = app;