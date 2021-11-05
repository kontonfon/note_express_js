// create an express app

const express = require("express")
const app = express()

// use the express-static middle ware

app.use(express.static("public"))

// define the first route

app.get("/",function(req,res){
    res.send("<h1>Hello World!")
})

// start the server listening for requests 

app.listen(process.env.PORT || 3000, ()=> console.log("Server is runnning..."))