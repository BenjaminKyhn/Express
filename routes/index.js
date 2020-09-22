var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/public/pages/index.html', { root: 'C:/Users/Ben/Node/Express' })
});

module.exports = router;
