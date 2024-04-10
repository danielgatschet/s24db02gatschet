var express = require('express');
const legumes_controlers= require('../controllers/legumes');
var router = express.Router();

/* GET home page. */
router.get('/', legumes_controlers.legumes_view_all_Page);
router.get('/detail', legumes_controlers.legumes_view_one_Page);
router.get('/create', legumes_controlers.legumes_create_Page);
router.get('/update', legumes_controlers.legumes_update_Page)


module.exports = router;
