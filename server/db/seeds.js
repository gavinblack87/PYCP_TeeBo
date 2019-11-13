let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teebo');

Item = require ('../models/itemModel');

Item.remove({}, function(err) {
  console.log('item collection removed')

  const itemOne = new Item()
    itemOne.itemName = 'hoodie',
    itemOne.itemBrand = 'Adidas',
    itemOne.itemCategory = 'Tops',
    itemOne.itemPrice = '9.00',
    itemOne.itemSold = false,
    itemOne.itemSize = 'small'

  itemOne.save(function(err) {
    if(err)throw err;
    console.log("item saved");
  });
})
