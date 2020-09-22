var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/benny', function(req, res, next) {
  res.send('Here lives a Benny');
});

module.exports = router;
