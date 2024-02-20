const express = require('express');
const categories =  require('./Route/categories')
const mongoose = require('mongoose');

const app = express()
mongoose.connect('mongodb://127.0.0.1/learningPlatform').
then(()=>{console.log("Connection is  successfull for Data Base")}).
catch((error)=>{console.log(error)})

app.use(express.json())
app.use(categories)



const port = process.env.PORT || 8000
app.listen(port,()=>{console.log(`Port is running on ${port}`)}) 