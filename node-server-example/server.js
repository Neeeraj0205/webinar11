const express = require("express");
const server=express();
server.get("/",function(req,res,next){
    res.send("hello world")
})
server.get("/greet/:tod",function(res,req,next){
    let greeting="good" + req.param.tod + req.query.name;
    res.send(greeting);
})
server.listen(2121);