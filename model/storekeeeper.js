const mongoose = require("mongoose")

let storecschema = mongoose.Schema({
   stkfirstname:{
       type:String

   },

   address:{
       type:String
   },

   stateid:{
    type:Number
   },

   cityid:{
    type:Number
   },

   patientid:{
    type:Number
   },
   pincode:{
    type:Number
   },

   feedbackemail:{
    type:String
   },

   customersupport:{
    type:String
   },
   
   contactnum:{
    type:Number
   },

   role:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"role"


   },  
})  


   let storemodel = mongoose.model("storekeeper",storecschema)
   module.exports = storemodel


   




