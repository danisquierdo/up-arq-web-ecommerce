// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var productImageSchema = new Schema({
    src: String
});

var Image = mongoose.model('Image', productImageSchema);

var productReviewSchema = new Schema({
    user: String,
    date: String,
    stars: Number,
    review: String
});

var Review = mongoose.model('Review', productReviewSchema);

// create a schema
var productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true    
    },
    image:  {
        type: String,
        required: true,
        default: ''
    },
    images: [Image],
    category:  {
        type: String,
        required: true,
        default: ''
    },
    label:  {
        type: String,
        required: true,
        default: ''
    },
    price: {
        type: Currency 
    },
    discount: Number,
    description:  {
        type: String,
        required: true
    },
    additionalInfo: String,
    overview: {
        type: String,
        required: true
    },
    quantity: Number,
    reviews: [Review],
    available: Boolean
},
{
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Products = mongoose.model('Product', productSchema);

// make this available to our Node applications
module.exports = Products;