// itemController.js
// Import item model
Item = require('../models/itemModel');

//handle index actions
exports.index = function (req, res) {
  Item.get(function (err, items) {
    if(err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Items retrieved successfully",
      data: items
    });
  });
};

//handle create item actions
exports.new = function (req, res) {
  var item = new Item();
  item.itemName = req.body.itemName;
  item.itemBrand = req.body.itemBrand;
  item.itemCategory = req.body.itemCategory;
  item.itemPrice = req.body.itemPrice;
  item.itemSold = req.body.itemSold;
  item.itemSize = req.body.itemSize;

//save the item and check for errors
  item.save(function (err) {
    if (err)
      res.json(err);
    res.json({
      message: 'New item created!',
      data: item
    });
  });
};

//handle view item info
exports.view = function (req, res) {
  Item.findById(req.params.item_id,
    function (err, item) {
      if (err)
        res.send(err);
      res.json({
        message: 'Item details loading..',
        data: item
      });
    });
};

// Handle update item info
exports.update = function (req, res) {
Item.findById(req.params.item_id, function (err, item) {
        if (err)
            res.send(err);
            item.itemName = req.body.itemName;
            item.itemBrand = req.body.itemBrand;
            item.itemCategory = req.body.itemCategory;
            item.itemPrice = req.body.itemPrice;
            item.itemSold = req.body.itemSold;
            item.itemSize = req.body.itemSize;

// save the activity and check for errors
        item.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Item Info updated',
                data: item
            });
        });
    });
};

// Handle delete item
exports.delete = function (req, res) {
    Item.remove({
        _id: req.params.item_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: "Item deleted"
        });
    });
};
