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
    images: [String],
    category:  { type: Schema.Types.ObjectId, ref: 'Category' },
    subcategory: { type: Schema.Types.ObjectId, ref: 'Category' },
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
    reviews: [{review:String}],
    available: Boolean,
    related: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
},
{
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Products = mongoose.model('Product', productSchema);

// make this available to our Node applications
module.exports = Products;