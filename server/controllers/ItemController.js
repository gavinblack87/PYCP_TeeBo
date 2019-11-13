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

//handle view item info
exports.view = function (req, res) {
  Item.findById(req.params.item_id,
    function (err, item) {
      if (err)
        res.send(err);
      res.json({
        message: 'Activity details loading..',
        data: activity
      })
    }
  )
}
