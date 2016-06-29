var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../model/user');
var Verify    = require('./verify');
var categories =  require('../model/category');
var products = require('../model/product');

router.get('/login', function(req,res){

  categories.find({'is_subcategory' : false}).populate('subcategories').exec(function (err, cat) {
    if (err)  throw err;

    products.find().sort({_id:-1}).limit(3).populate('category').exec(function(err,prod){
      if (err)  throw err;

      res.render('login',
          {
            categories: cat,
            latest: prod
          });

    });
  });
});

router.post('/login', function(req, res, next) {

  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({
        err: info
      });
    }

    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }

      var token = Verify.getToken(user);

      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
});

router.get('/register', function(req,res){

  categories.find({'is_subcategory' : false}).populate('subcategories').exec(function (err, cat) {
    if (err)  throw err;

    products.find().sort({_id:-1}).limit(3).populate('category').exec(function(err,prod){
      if (err)  throw err;

      res.render('register',
          {
            categories: cat,
            latest: prod
          });

    });
  });
});

/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.post('/register', function(req, res) {
  User.register(new User({
      username : req.body.username,
      email: req.body.email}),

      req.body.password, function(err, user) {
        if (err) {
          res.render('error', {message: 'Fallo en el registro', error: err})
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/users/login');
        });
      });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

module.exports = router;
