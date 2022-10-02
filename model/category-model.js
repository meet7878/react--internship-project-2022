const mongoose = require("mongoose")


let categorySchema = new mongoose.Schema({
    categoryname:{
        type:String

    },
  
})

//schema insert in table and export
const categorymodel =  mongoose.model("category",categorySchema)
module.exports = categorymodel