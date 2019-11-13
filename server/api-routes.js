// api-routes.js
// Initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API its working',
    message: 'Welcome to PYCP!',
  });
});

//Import Controller
let itemController = require('./controllers/itemController');

//Activity apiRoutes
router.route('/items')
  .get(itemController.index)
  .post(itemController.new);
