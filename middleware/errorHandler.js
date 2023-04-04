const errorHandler =(err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
    case 400:
    res.json({tittle:"validation failed",message:err.message,stackTrace:err.stack});
    case 404:
     res.json({tittle:"Not Found",message:err.message,stackTrace:err.stack})

    }
};
module.exports=errorHandler