var Legumes = require('../models/legumes');
// List of all legumess
exports.legumes_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Legumes list');
};
// for a specific legumes.
exports.legumes_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Legumes detail: ' + req.params.id);
};
// Handle legumes create on POST.
exports.legumes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Legumes();
    document.legume_type = req.body.legume_type;
    document.amount = req.body.amount;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
};
// Handle legumes delete from on DELETE.
exports.legumes_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Legumes delete DELETE ' + req.params.id);
};
// Handle legumes update form on PUT.
exports.legumes_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Legumes update PUT' + req.params.id);
};

// List of all legumess
exports.legumes_list = async function(req, res) {
    try{
        theLegumes = await Legumes.find();
        res.send(theLegumes);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.legumes_view_all_Page = async function(req, res) {
    try{
        theLegumes = await Legumes.find();
        res.render('legumes', { title: 'Legumes Search Results', results: theLegumes });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};