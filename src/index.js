const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require('cors')

const app = express()

const conn = () => {
    try {
        const c = mongoose.connect("mongodb+srv://mateus:ecommerce@ecommercecluster-innaq.mongodb.net/test?retryWrites=true&w=majority", { 
            useNewUrlParser: true,
             useUnifiedTopology: true })
        console.log(c)
    } catch(err) {
        console.log('database not connected')
    }
}

conn()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()) 
app.use(routes)
app.listen(3001)