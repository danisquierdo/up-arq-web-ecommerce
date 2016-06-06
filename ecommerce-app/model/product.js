// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

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
    description:  {
        type: String,
        required: true
    },
    additionalInfo: String,
    overview: {
        type: String,
        required: true
    },
    quantity: Number
},
{
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Products = mongoose.model('Product', productSchema);

// make this available to our Node applications
module.exports = Products;