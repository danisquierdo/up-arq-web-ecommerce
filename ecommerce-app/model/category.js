// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

// create a schema
var subcategorySchema = new Schema({
    name: String,
    url: String
});

var Subcategory = mongoose.model('subcategories', subcategorySchema);

var categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    image: String,
    url: String,
    subcategories: [Subcategory]
});

// create a model using schema
var Category = mongoose.model('categories', categorySchema);

// make this available to our Node applications
module.exports = Category;