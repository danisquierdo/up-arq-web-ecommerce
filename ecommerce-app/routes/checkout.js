/**
 * Created by Dany on 6/25/2016.
 */
var express = require('express');
var router = express.Router();
var categories =  require('../model/category');
var products = require('../model/product');

router.get('/', function(req,res){

    categories.find({'is_subcategory' : false}).populate('subcategories').exec(function (err, cat) {
        if (err)  throw err;

        products.find().sort({_id:-1}).limit(3).populate('category').exec(function(err,prod){
            if (err)  throw err;

            res.render('checkout',
                {
                    categories: cat,
                    latest: prod
                });

        });
    });
});



module.exports = router;
