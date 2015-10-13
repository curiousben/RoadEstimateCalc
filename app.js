var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
//to connect to any localhost Database 'mongod://127.0.0.1/mydb'
//connection to local Mongo Database
mongoose.connect('mongodb://127.0.0.1/secondevoDB', function(err, db){
	if (!err) {
		console.log("Mongo Server port: Connected to App");
	};
});
var port = process.env.PORT || 3000;

var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

var methodOverride = require('method-override');
app.use(favicon(__dirname+'/build/favicon.ico'));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
//App is able to grab javascript packages locally
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(__dirname+'/bower_components'));

//Configuring Passport
var passport= require('passport');
var session = require('express-session');

app.use(session({secret: 'RoadE5t1mateT00L',
				saveUninitialized: true,
				resave: false}));
app.use(passport.initialize());
app.use(passport.session());

var flash = require('connect-flash');
app.use(flash());

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'build'),
  dest: path.join(__dirname, 'build'),
  debug:true,
}));

var initPassport = require('./passport/init');
initPassport(passport);

var routes = require('./routes/index')(passport);
var datarecords = require('./routes/datarecords');

app.use('/', routes);
app.use('/datarecords', datarecords);

app.listen(port);
console.log('Server running on port: '+port);