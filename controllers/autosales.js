var Users = require('../models/users.js');
var Comments = require('../models/comments.js');
var Posts = require('../models/posts.js');

var autosales = [
   { id : 1,
     name : "The Great Widget",
     price : 1000.00
   },
   { id : 2,
     name : "The Great Second Widget",
     price : 2000.00
   },
   { id : 3,
     name : "The Great Third Widget",
     price : 3000.00
   }
]

exports.index = function(req, res) {
   res.send(autosales);
};

exports.new = function(req, res) {
   res.send('displaying new widget form');
};

// add
exports.create = function(req, res) {
  var indx = autosales.length + 1;
  autosales[autosales.length] =
   { id : indx,
     name : req.body.widgetname,
     price : parseFloat(req.body.widgetprice) };
  //console.log(autosales[indx-1]);
  res.send('Car ' + req.body.widgetname + ' added with id ' + indx);
};

// show
exports.show = function(req, res) {
   var indx = parseInt(req.params.id) - 1;
   if (!autosales[indx])
      res.send('There is no car with id of ' + req.params.id);
   else
      res.send(autosales[indx]);
};

// delete
exports.destroy = function(req,res) {
   var indx = req.params.id - 1;
   delete autosales[indx];

   //console.log('deleted ' + req.params.id);
   res.send('deleted ' + req.params.id);
};

// display edit form
exports.edit = function(req, res) {
   res.send('displaying edit form');
};


// update
exports.update = function(req,res) {
  var indx = parseInt(req.params.id) - 1;
  autosales[indx] =
   { id : indx,
     name : req.body.widgetname,
     price : parseFloat(req.body.widgetprice)}
  //console.log(autosales[indx]);
  res.send ('Updated ' + req.params.id);
};
