var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Users = new Schema({
  sn : {type: String, require: true, trim: true, unique: true}, 
  name : {type: String, required: true, trim: true},
  email : {type: String, required: true, trim: true},
  data : {type: Date, required: true}
});

module.exports = mongoose.model('Users', Users);

//users id name data email