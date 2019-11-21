const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require('cors')

const app = express()

try {
    const c = mongoose.connect("",
     { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    console.log(c)
} catch(err) {
    console.log('database not connected')
}

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors()) 
app.use(routes)
app.listen(3001)