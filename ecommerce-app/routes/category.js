/**
 * Created by Dany on 6/25/2016.
 */
var express = require('express');
var router = express.Router();
var categories =  require('../model/category');
var products = require('../model/product');


router.get('/:category', function(req,res){

    categories.find({'is_subcategory' : false}).populate('subcategories').exec(function (err, cat) {
        if (err)  throw err;

        products.find().sort({_id:-1}).limit(3).populate('category').exec(function(err,prod){
            if (err)  throw err;

            categories.findOne({'url' : req.params.category, 'is_subcategory' : false}).populate('subcategories').exec(function (err, category) {
                if (err) throw err;

                products.find({'category' : category.id}).populate('subcategory').exec(function (err, products) {

                    res.render('category',
                        {
                            categories: cat,
                            latest: prod,
                            category: category,
                            products: products
                        });

                });
            });
        });
    });
});

router.get('/:category/:subcategory', function(req,res){

    categories.find({'is_subcategory' : false}).populate('subcategories').exec(function (err, cat) {
        if (err)  throw err;

        products.find().sort({_id:-1}).limit(3).populate('category').exec(function(err,prod){
            if (err)  throw err;

            categories.findOne({'url' : req.params.category, 'is_subcategory' : false}, function (err, category) {
                if (err) throw err;

                categories.findOne({'url': req.params.subcategory, 'is_subcategory': true}, function (err, subcategory) {
                    if (err) throw err;

                    products.find({'category': category.id, 'subcategory': subcategory.id}).populate('subcategory').exec(function (err, products) {

                        res.render('category',
                            {
                                categories: cat,
                                latest: prod,
                                category: category,
                                subcategory: subcategory,
                                products: products
                            });

                    });
                });
            });
        });
    });
});

module.exports = router;