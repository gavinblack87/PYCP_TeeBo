let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pycp');

Item = require ('../models/itemModel');

Item.remove({}, function(err) {
  console.log('item collection removed')


})
