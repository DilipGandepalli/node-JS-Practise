const mongoose = require('mongoose')

//creating the DB
mongoose.connect('mongodb://localhost/testDataBase')
.then(()=>{console.log("Connect successfully test DB")})
.catch(err=>{console.log("having an issue to connect",err)})

//giving schema to the db
const testSchema = new mongoose.Schema({
    name:{type:String, required:true,minlength:4},
    age:Number,
    Mob:Number,
    Address:String,
    Area:{
        type:String,
        required : true,
        enum:['KKD','PTP','CHN','HYD','TPT']
    },
    skills:{type:Array, validate:{
        validator:function(skills){
           return skills.length >1
        }
    }},
    isAvailable:{type:Boolean,requred:true},
    rating:{type:Number,required : function(){return this.isAvailable}}
})

const Details = mongoose.model('testDB', testSchema)
// entering the values into the DB
async function exampleProg(){
const details = new Details({
    name:'nams',
    age:25,
    Mob:9493444473,
    Address:'PTP',
    isAvailable:false,
    Area:'KKD',
    skills:['Js']
    // rating:4.2
})

    try{
        const result = await details.save()
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
exampleProg();

//getting the details from the DB
async function getDetails(){
    const details = await Details.find({rating : {$in : [1]}}).select({name:1,Address:1})
    .or([{Address:'PTP'}])
    console.log(details)
}
// getDetails()

//updating the DB values using id

async function updateValue(id){
    const detail = await Details.findById(id);

    if(!detail) return;

    detail.name = 'Divya'
    detail.Address='Ptp'

    const updatedDetails = await detail.save();

    console.log(updatedDetails);

}

// updateValue('65c4c7f17fef58ce286acabc')

//deleting the value

async function DeletingValue(id){
    const detail =await Details.findByIdAndDelete(id);

    console.log(detail);
}

// DeletingValue('65c4d5b4a83ba208d2127345')