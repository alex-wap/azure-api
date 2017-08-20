var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
 name: String,
})
var Item = mongoose.model('Item', ItemSchema); 