function myMiddleWare(req,res,next){
    console.log("This is custom middle ware")
    next()
}


function mymiddleware2(req,res,next){
    console.log("It's a middleware")
    next()
}
module.exports =  {
    middleware1 : myMiddleWare,
    middleware2 : mymiddleware2
}