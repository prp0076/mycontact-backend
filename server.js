// creation of express server
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
//dotenv install
const dotenv= require("dotenv").config();
 
//thunder client extension
const app = express();
//app.use is middleware
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);

//get method
// app.get("/api/contacts",(req,res)=>{
//     res.send("Get for contact");
// })

//json response
// app.get("/api/contacts",(req,res)=>{
//   res.status(200).json({message:"get all contacts"});
// }) 
const port = 3001;
app.listen(port,()=>{
    console.log(`server running on ${port}` )
})