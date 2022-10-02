const mongoose = require("mongoose")


let StateSchema = new mongoose.Schema({
    statename:{
        type:String,
        

    },
   
})

//schema insert in table and export
const statemodel =  mongoose.model("state",StateSchema)
module.exports = statemodel