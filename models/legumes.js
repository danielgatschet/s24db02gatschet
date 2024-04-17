const mongoose = require("mongoose")
const legumeSchema = mongoose.Schema({
    legume_type: String,
    amount: {type: Number, min: 1, max: 25},
    price: Number
})
module.exports = mongoose.model("Legumes", legumeSchema)