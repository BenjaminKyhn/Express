var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(__dirname);
  res.sendFile('/public/pages/page.html', { root: 'C:/Users/Ben/Node/Express' })
});

module.exports = router;
