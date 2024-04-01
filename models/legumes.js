const mongoose = require("mongoose")
const legumeSchema = mongoose.Schema({
    legume_type: String,
    amount: Number,
    price: Number
})
module.exports = mongoose.model("Legumes", legumeSchema)