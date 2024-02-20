const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sampleDataBase')
.then(()=>console.log("Connection is successful"))
.catch((err)=>console.log("couldn't connect to MongoDB", err))

const courseSchema =  new mongoose.Schema({
    name : String,
    creator:String,
    publishedDate : {type:Date, default:Date.now},
    isPublised:Boolean,
    mobile_num:Number
})


const Course = mongoose.model('Course',courseSchema)

async function createCourse(){

    const course =  new Course({
        name:'Rock it!',
        creator:'Dilip',
        isPublised:true,
        mobile_num:9493444473
    })
    
    const result = await course.save()
    
    console.log(result)
}

createCourse();




