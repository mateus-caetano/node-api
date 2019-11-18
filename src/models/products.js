const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
    nome: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Product', Product)