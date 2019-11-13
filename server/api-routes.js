// api-routes.js
// Initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API its working',
    message: 'Welcome to teebo!',
  });
});

//Import Controller
var itemController = require('./controllers/itemController');

//Item Routes
router.route('/items')
  .get(itemController.index)
  .post(itemController.new);

router.route('/items/:item_id')
 .get(itemController.view)
 .patch(itemController.update)
 .put(itemController.update)
 .delete(itemController.delete);

//export API routes
module.exports = router;
