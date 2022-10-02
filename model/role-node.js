const mongoose=require("mongoose") //compulsary need to create schema

//schema
let Roleschema = new mongoose.Schema({
    roleName:{
        type:String
    }
})

//model

let Rolemodel = mongoose.model("role",Roleschema)

module.exports = Rolemodel
