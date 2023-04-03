// creation of express server
const express = require("express");
//dotenv install
const dotenv= require("dotenv").config();

//thunder client extension
const app = express();
//app.use is middleware
app.use("/api/contacts",require("./routes/contactRoutes"));
//get method
// app.get("/api/contacts",(req,res)=>{
//     res.send("Get for contact");
// })

//json response
// app.get("/api/contacts",(req,res)=>{
//   res.status(200).json({message:"get all contacts"});
// }) 
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server running on ${port}` )
})