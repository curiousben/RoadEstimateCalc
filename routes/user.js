var User = require('./models/user');
var express = require('express');
var router = express.Router();

router.get('/signup', function (req,res){
	res.render('SignUp.ejs');
});

router.post('/signup', function (req,res){
	newUserProfile = new User();
	newUserProfile.username= req.body.NewUsername;
	newUserProfile.password= req.body.NewPassword;
	newUserProfile.save(function (err) {
		if (err) {
			throw err;
		};
	})
	res.redirect('/SignUp')
});