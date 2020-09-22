var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile('/public/images/sponge3.jpg', { root: 'C:/Users/Ben/Node/Express' })
});

module.exports = router;
