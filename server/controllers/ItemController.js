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
