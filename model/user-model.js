const mongoose = require("mongoose")


let UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true

    },
    number:{
        type:String,

    },


    email:{

        type:String
        
    },
    password:{
        type:String

    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    

    },
})

//schema insert in table and export
const Usermodel =  mongoose.model("user",UserSchema)
module.exports = Usermodel