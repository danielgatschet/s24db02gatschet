var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var legumes_controller = require('../controllers/legumes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// legumes ROUTES ///
// POST request for creating a legumes.
router.post('/legumes', legumes_controller.legumes_create_post);
// DELETE request to delete legumes.
router.delete('/legumes/:id', legumes_controller.legumes_delete);
// PUT request to update legumes.
router.put('/legumes/:id', legumes_controller.legumes_update_put);
// GET request for one legumes.
router.get('/legumes/:id', legumes_controller.legumes_detail);
// GET request for list of all legumes items.
router.get('/legumes', legumes_controller.legumes_list);
module.exports = router;