//desc Get all contact
//@route Get /api/contacts
//@access public


const getContact= async (req,res)=>{
    res.status(200).json({message:"get all contacts"});
}
const postContact=async (req,res)=>{
    console.log(req.body);
    const {name,age,contact}=req.body;
    if(!name || !age || !contact){
        res.status(400);
        throw new Error("All field are mendatory");
    }
    res.status(200).json({message:"post all contacts"});
}
const putContact=async (req,res)=>{
    res.status(200).json({message:`update contact ${req.params.id}`});
}
const deleteContact=async (req,res)=>{ 
    res.status(200).json({message:`delete all contacts ${req.params.id}`});
}

module.exports ={getContact,postContact,putContact,deleteContact}
