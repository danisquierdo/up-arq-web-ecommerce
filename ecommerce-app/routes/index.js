var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var categories =  require('../model/category');
var products =  require('../model/product');
var promotions =  require('../model/promotion');


/* GET home page. */
router.get('/', function(req, res, next) {

    categories.find({'is_subcategory' : false}).populate('subcategories').exec(function (err, cat) {
        if (err)  throw err;

          products.find().sort({_id:-1}).limit(3).populate('category').exec(function(err,prod){
              if (err)  throw err;

              promotions.find({active: true},function(err,promo){
                  if (err)  throw err;

                  res.render('index',
                      {
                          categories: cat,
                          latest: prod,
                          promos: promo
                      });

              });
          });
    });
});

module.exports = router;
