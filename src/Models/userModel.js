const mongoose = require("mongoose")
const User = new mongoose.Schema({
    MobileNo:{
        type:String,
        required: true
    },
    UserType:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("User",User)