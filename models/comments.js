var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Comments = new Schema({
  sn : {type: String, require: true, trim: true, unique: true}, 
  snpost : {type: String, required: true, trim: true},
  descrition : {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Comments', Comments);

//comments id idpost descrition