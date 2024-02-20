const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoute = require('./Routes/routes')
const ejs = require('ejs')

const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine','ejs')

dotEnv.config()
app.use(bodyParser.json())

app.get('/mango',(req,res)=>{
    res.json({fruit:'mango'})
})

app.get('/sample',(req,res)=>{
    res.render('samplepage')
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully")
    })
    .catch((error) => {
        console.log(error)
    })

app.use('/employees', employeeRoute)

app.listen(PORT, () => {
    console.log(`Server started and running at ${PORT}`)
})