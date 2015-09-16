var express = require('express');
var app = express();

app.use(express.static(__dirname+'/bower_components'));
app.use(express.static(__dirname+'/build'));

app.get('/AdministerInformation', function (req,res){
	res.sendfile('build/Administration_Information_Fillout.html',{root: __dirname});
});

app.listen(3000);
//80 for deployment