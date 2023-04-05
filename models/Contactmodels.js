const mongoose = require("mongoose");
const contactmodels = mongoose.Schema({
    name:{
        type: String,
        required:[true,"please add contact name"]
    },
    age:{
        type:String,
        required:[true,"please add email"]
    },
    contact:{
        type:String,
        required:[true,"please add contact number"]
    }
},{
    timestamps:true
})
module.exports = mongoose.model("Contact",contactmodels);