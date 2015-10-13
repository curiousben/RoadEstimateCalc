var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport) {
// =========================== User Login Route Paths ===========================

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

//=========================== Individual Page Paths of the Web App ===========================

	router.get('/AdministerInformation', isAuthenticated, function (req,res,passport,next){
		res.render('Administration_Information_Fillout');
	});
	router.get('/ExistingRoadway', isAuthenticated, function (req,res,passport,next){
		res.render('Existing_Roadway_Information_Fillout');
	});
	router.get('/ExistingBridge', isAuthenticated, function (req,res,passport,next){
		res.render('Existing_Bridge_Information_Fillout');
	});
	router.get('/ProposedRoad', isAuthenticated, function (req,res,passport,next){
		res.render('Proposed_Roadway_Information_Fillout');
	});
	router.get('/ProposedBridge', isAuthenticated, function (req,res,passport,next){
		res.render('Proposed_Bridge_Information_Fillout');
	});
	router.get('/Connections', isAuthenticated, function (req,res,passport,next){
		res.render('Connection_Information_Fillout');
	});
	router.get('/EarthworkCut', isAuthenticated, function (req,res,passport,next){
		res.render('Earthwork_Cut_Information_Fillout');
	});
	router.get('/EarthworkFill', isAuthenticated, function (req,res,passport,next){
		res.render('Earthwork_Fill_Information_Fillout');
	});
	router.get('/UnisuitableMaterial', isAuthenticated, function (req,res,passport,next){
		res.render('Unsuitable_Material_Information_Fillout');
	});
	router.get('/CommercialRockFills', isAuthenticated, function (req,res,passport,next){
		res.render('Commercial_Rock_Material_Information_Fillout');
	});
	router.get('/Drainage', isAuthenticated, function (req,res,passport,next){
		res.render('Drainage_Information_Fillout');
	});
	router.get('/SWMFacility', isAuthenticated, function (req,res,passport,next){
		res.render('SWM_Facility_Questions_Information_Fillout');
	});
	router.get('/Traffic', isAuthenticated, function (req,res,passport,next){
		res.render('Traffic_Information_Fillout');
	});
	router.get('/Entrances', isAuthenticated, function (req,res,passport,next){
		res.render('Entrances_Information_Fillout');
	});
	router.get('/UtilityImpacts', isAuthenticated, function (req,res,passport,next){
		res.render('Utility_Impacts_Information_Fillout');
	});
	router.get('/RW3', isAuthenticated, function (req,res,passport,next){
		res.render('Retaining_Wall_RW3');
	});
	router.get('/Sidewalk', isAuthenticated, function (req,res,passport,next){
		res.render('Sidewalk_Information_Fillout');
	});
	router.get('/Mitigation', isAuthenticated, function (req,res,passport,next){
		res.render('Mitigation_Information_Fillout');
	});
	router.get('/MiscellaneousItems', isAuthenticated, function (req,res,passport,next){
		res.render('Miscellaneous_Information_Fillout');
	});
	router.get('/UnitPrices', isAuthenticated, function (req,res,passport,next){
		res.render('Unit_Prices_input');
	});
	router.get('/Contingency', isAuthenticated, function (req,res,passport,next){
		res.render('Contingency_Interface');
	});
	router.get('/Receipt', isAuthenticated, function (req,res,passport,next){
		res.render('Reciept');
	});
	router.get('/CreateUpdateRecord', isAuthenticated, function (req,res,passport,next){
		res.render('CreateUpdateRecord');
	});
	router.get('/RetrieveRecord', isAuthenticated, function (req,res,passport,next) {
		res.render('RetrieveRecord');
	});


	return router;
};