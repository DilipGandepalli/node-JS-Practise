const express = require('express')
const mymiddle = require('./midddleware/middle')
const morgan = require('morgan')

const app = express()

app.use(express.json())

app.use(mymiddle.middleware1)

app.use(mymiddle.middleware2)

app.use(morgan('tiny'))

const courses = [
    {id:1,name:'python'},
    {id:2,name:'java'},
    {id:3,name:'React Native'},
    {id:4,name:"Node JS"},
]


app.get('/' ,(req,res)=>{
    res.send("Hello World...!, This is Dilip")
})

app.get('/about',(req,res)=>{
    res.send("It's all about me....")
})

app.get('/mobile_num',(req,res)=>{
    res.send("Mob No: 9493444473")
})

app.get('/address',(req,res)=>{
    res.send("Address: kakinada")
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})

//to post the data -->
app.post('/courses',(req,res)=>{
    const newCourse = {
        id : courses.length+1,
        name : req.body.name
    }

    courses.push(newCourse);
    res.send(courses)

})

const port = process.env.PORT || 3000 // <--


// to read the data -->
app.get('/courses/:id',(req,res)=>{
    let course = courses.find(course =>course.id === parseInt(req.params.id))
    if(!course) res.status(404).send("Course doesn't exist")//if course is not found it will send these 404 message
  
})  // <--


// --> to update the data
app.put('/courses/:coursename',(req,res)=>{
    let course = courses.find(course=> course.name === req.params.coursename)

    if(!course) res.status(404).send("The course you are looking is doesn't exist");

    course.name = req.body.name

}) // <--

app.delete('/courses/:coursename',(req,res)=>{

})


app.listen(port,()=>{console.log(`Port is running on ${port}`)});



