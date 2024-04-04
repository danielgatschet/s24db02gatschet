var Legumes = require('../models/legumes');
// List of all legumess
exports.legumes_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Legumes list');
};
// for a specific legumes.
exports.legumes_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Legumes.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.legumes_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Legumes.findById( req.params.id)
        // Do updates of properties
        if(req.body.legume_type)
            toUpdate.legume_type = req.body.legume_type;
        if(req.body.amount) toUpdate.amount = req.body.amount;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
     }
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
        let theLegumes = await Legumes.find();
        res.render('legumes', { title: 'Legumes Search Results', results: theLegumes });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};