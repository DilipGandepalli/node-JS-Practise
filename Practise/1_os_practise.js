const os = require('os')

const path = require('path')

console.log(os.arch());
 
console.log(os.version())

console.log(os.freemem())

console.log(os.totalmem())

console.log(__dirname)

console.log(__filename)

console.log(path.basename(__filename))

console.log(path.parse(__dirname))