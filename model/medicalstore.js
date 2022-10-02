const mongoose = require("mongoose")

let medicalschema = mongoose.Schema({
    storename:{
        type:String
 
    },

    storeaddress:{
        type:String
    },

    stokeeperId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"storekeeper"
    
    
       }, 

    })

   let medicalmodel =mongoose.model("medicalstore",medicalschema)
   module.exports = medicalmodel