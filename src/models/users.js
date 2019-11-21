const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const Product = new Schema({
    nome: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    size: {
        required: true,
        type: String

    },
    genre: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        dafault: Date.now
    }
})

Product.plugin(mongoosePaginate)

module.exports = mongoose.model('Product', Product)