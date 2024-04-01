var express = require('express');
const legumes_controlers= require('../controllers/legumes');
var router = express.Router();

/* GET home page. */
router.get('/', legumes_controlers.legumes_view_all_Page);

module.exports = router;
