const asyncHandler = require("express-async-handler");
const Contact = require("../models/Contactmodels");
//desc Get all contact
//@route Get /api/contacts
//@access public

const getContact= asyncHandler(async (req,res)=>{
   const contacts= await Contact.find();
    res.status(200).json(contacts);
})
const postContact= asyncHandler(async (req,res)=>{
    // console.log(req.body);
    const {name,age,contact}=req.body;
    if(!name || !age || !contact){
        res.status(400);
        throw new Error("All field are mendatory");
    }
    const tact = await Contact.create({
        name,
        age,
        contact
    })
    res.status(200).json(tact);
})
const putContact=asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update contact ${req.params.id}`});
})
const deleteContact=asyncHandler(async (req,res)=>{ 
    res.status(200).json({message:`delete all contacts ${req.params.id}`});
})

module.exports ={getContact,postContact,putContact,deleteContact}
