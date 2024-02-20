const express = require('express')

const app = express()

app.use(express.json())

const port = 5000;

const homeHandler = ((req,res,next)=>{
    if(10<20){
        next()
    }
})

const aboutPageHandler = ((req,res,next)=>{
    if(10==20){
        next()
    }
})

const checkApple  = ((req,res,next)=>{
    if(40>30){
        next()
    }
})

app.get('/home',homeHandler,(req,res)=>{
    res.send('This is Home page')
})

app.get('/about',aboutPageHandler,(req,res)=>{
    res.send('This is about page')
})

app.get('/apple',checkApple,(req,res)=>{
    res.send('Apple is a fruit')
})

app.post('/apple',(req,res)=>{
    const hello = req.body.name

    res.send("My name is "+hello)
})

app.listen(port,()=>{
    console.log("Server started successfull in the port: ",port)
})