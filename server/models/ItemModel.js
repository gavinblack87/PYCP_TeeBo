const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({

  itemName: String,
  itemBrand: String,
  itemCategory: String,
  itemPrice: String,
  itemSold: Boolean,
  itemSize: String

})

const Item = module.exports =
mongoose.model('item', itemSchema);
module.exports.get = function (callback, limit) {
  Item.find(callback).limit(limit);
}
