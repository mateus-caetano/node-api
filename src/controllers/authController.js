const User = require('../models/users')
const bcrypt = require('bcrypt')

module.exports = {
    async users( req, res ) {
        try{
            const log = req.body

            bcrypt.hash(log.password, 10, async (err, hash) => {
                if(err){
                    res.status(500).send({ error: "internal server error"})
                }
                log.password = hash
                const user = await User.create(log)
                user.password = undefined
                return res.status(200).json(user)
            })
        } catch (err) {
            res.sendStatus(500)
            return res.send('server error')
        }
    },
    async index(req, res) {
        try{
            const user = await User.find({})
            user.password = undefined
            return res.status(200).json(user)
        } catch (err){
            res.sendStatus(500)
        }
    }
}