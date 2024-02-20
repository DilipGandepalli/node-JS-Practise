const fs = require('fs')

console.log(''+fs.readFileSync('sampleFile.txt'))

// fs.readFile("sampleFile.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.writeFileSync("sample.txt","hello bro")

fs.unlinkSync("sample.txt")