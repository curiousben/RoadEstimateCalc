var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var routes = require('./routes/index');
var app = express();


app.use(favicon(__dirname+'/build/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
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