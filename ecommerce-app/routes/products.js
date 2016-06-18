var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var categories =  require('../model/category');
var products = require('../model/product');

//var bodyParser = require('body-parser');
//var Verify = require('./verify');
//var productRouter = express.Router();
//productRouter.use(bodyParser.json());

//TODO: CRUD solo debe estar disponible para el admin!!

//Código comentado para copiar. No sirve porque no renderiza views y porque pide login
/*productRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Products.find({}, function (err, product) {
        if (err) throw err;
        res.json(product);
    });
})

.post(Verify.verifyOrdinaryUser, function (req, res, next) {
    Products.create(req.body, function (err, product) {
            if (err) throw err;
        console.log('Product created!');
        var id = product._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the product with id: ' + id);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
    Products.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

productRouter.route('/:productId')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Products.findById(req.params.productId, function (err, product) {
        if (err) throw err;
        res.json(product);
    });
})

.put(Verify.verifyOrdinaryUser, function (req, res, next) {
    Products.findByIdAndUpdate(req.params.productId, {
        $set: req.body
    }, {
        new: true
    }, function (err, product) {
        if (err) throw err;
        res.json(product);
    });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
    Products.findByIdAndRemove(req.params.productId, function (err, resp) {        if (err) throw err;
        res.json(resp);
    });
})*/


router.get('/:id', function(req,res){

    categories.find({'is_subcategory' : false}).populate('subcategories').exec(function (err, cat) {
        if (err)  throw err;

        products.find().sort({_id:-1}).limit(3).populate('category').exec(function(err,prod){
            if (err)  throw err;

            products.findById(req.params.id).populate('related').exec(function (err, product) {
                if (err) throw err;

                res.render('product',
                    {
                        categories: cat,
                        latest: prod,
                        product: product
                    });

            });
        });
    });
});



module.exports = router;