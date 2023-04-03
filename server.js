// creation of express server
const express = require("express");
//dotenv install
const dotenv= require("dotenv").config();

//thunder client extension
const app = express();
//get method
app.get('/api/contacts',(req,res)=>{
    res.send("Get for contact")
})
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server running on ${port}` )
})