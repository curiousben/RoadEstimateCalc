var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var routes = require('./routes/index');
var mongoose = require('mongoose');
var app = express();


//to connect to any localhost Database 'mongod://127.0.0.1/mydb'

//connection to local Mongo Database
mongoose.connect('mongodb://127.0.0.1/secondevoDB');


app.use(favicon(__dirname+'/build/favicon.ico'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'build'),
  dest: path.join(__dirname, 'build'),
  debug:true,
}));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(__dirname+'/bower_components'));

app.set('view engine', 'ejs');

require('./routes/index.js')(app);

app.listen(port);
console.log('Server running on port: '+port);