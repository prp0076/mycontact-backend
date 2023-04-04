const contant = require("../constant");
const errorHandler =(err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
    case contant.VALIDATION_ERROR:
    res.json({tittle:"validation failed",message:err.message,stackTrace:err.stack});
    case contant.NOTFOUND:
     res.json({tittle:"Not Found",message:err.message,stackTrace:err.stack})
    }
};
module.exports=errorHandler