var mongoose = require('mongoose');

var printSchema = mongoose.Schema({
    title: String,
    category: String,
    ratio: String,
    img: String,
    alt: String,
    dateAdded: { created:  {type: Date, default: Date.now} }
});

module.exports = mongoose.model('Print', printSchema);