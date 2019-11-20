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

    async index(req, res){
        try{
            const product = await Product.find({})
            return res.json(product)
        } catch(err){
            res.status(500).json(err)
        }
    },

    async show(req, body){
        try{
            const product = await Product.findById(req.params.id)
            return res.json(product)
        } catch(err){
            res.json(err)
        }
    },

    async update(req, res){
        try{
            const product = await Product.findByIdAndUpdate(req.params.id,
                                                            req.body,
                                                            { new : true })
            return res.json(product)
        } catch(err){
            res.json(err)
        }
    },

    async destroy(req, res){
        try{
            const product = await Product.findByIdAndRemove(req.params.id)
        } catch(err){

        }
    }
}