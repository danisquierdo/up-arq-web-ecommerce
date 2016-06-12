// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var promotionSchema = new Schema({
    title: String,
    subtitle: String,
    url: String,
    image: String,
    active:
        {
            type: Boolean,
            default: false
        }
});

var Promotion = mongoose.model('promotions', promotionSchema);

// make this available to our Node applications
module.exports = Promotion;