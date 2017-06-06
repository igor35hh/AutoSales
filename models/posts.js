var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Posts = new Schema({
  sn : {type: String, require: true, trim: true, unique: true}, 
  snuser : {type: String, required: true, trim: true},

  location : {type: String, required: true, trim: true},
  phone : {type: String, required: true, trim: true},
  data : {type: Date, required: true},
  dataexpire : {type: Date, required: true},

  typecar : {type: String, required: true, trim: true},
  modelcar : {type: String, required: true, trim: true},
  yearcar : {type: Number, required: true},
  mileage : {type: Number},

  engine : {type: String, required: true, trim: true},
  fueltype : {type: String, required: true, trim: true},
  transmitiontype : {type: String, required: true, trim: true},

  condition : {type: String, required: true, trim: true},
  photo : {type: String, required: true, trim: true},
  pricecar : {type: Number, required: true},
  
  descrition : {type: String trim: true},
  active : {type: Boolean, required: true}
});

module.exports = mongoose.model('Posts', Posts);

//posts id iduser phone data dataexpire typecar modelcar yearcar mileage condition pricecar descrition active 

