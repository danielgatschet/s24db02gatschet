var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('legumes', { title: 'Search Results: Legumes' });
});

module.exports = router;
