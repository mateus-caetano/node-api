const Product = require('../models/products')

module.exports = {
    async store(req, res){
        try{
            const product = await Product.create(req.body)
            return res.json(product)
        } catch(err){
            res.status(500).json(err)
        }
    },

    async index(req, res, next){
        try{
            const product = await Product.find({})
            return res.json(product)
        } catch(err){
            res.status(500).json(err)
        }
    }
}