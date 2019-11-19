const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require('cors')

const app = express()

try {
    mongoose.connect("mongodb+srv://mateus:meusestudos123@ecommerce-1t8wu.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
} catch(err) {
    console.log('database not connected')
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()) 
app.use(routes)
app.listen(3001)