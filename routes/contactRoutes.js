const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
       res.status(200).json({message:"get all contacts"});
});
router.route("/").post((req,res)=>{
       res.status(200).json({message:"get all contacts"});
});
router.route("/:id").put((req,res)=>{
       res.status(200).json({message:`update contact ${req.params.id}`});
});
router.route("/:id").get((req,res)=>{
       res.status(200).json({message:`delete all contacts ${req.params.id}`});
});
module.exports=router
