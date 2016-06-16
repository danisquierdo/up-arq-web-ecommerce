// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

var categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    image: String,
    url: String,
    subcategories: [{name: String, url: String}]
});

// create a model using schema
var Category = mongoose.model('Category', categorySchema,'categories');

// make this available to our Node applications
module.exports = Category;