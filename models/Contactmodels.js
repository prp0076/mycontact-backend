const mongoose = require("mongoose");
const contactmodels = mongoose.Schema({
    name:{
        type: String,
        required:[true,"please add contact name"]
    },
    email:{
        type:String,
        required:[true,"please add email"]
    },
    phone:{
        type:String,
        required:[true,"please add contact number"]
    }
})