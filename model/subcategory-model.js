const mongoose = require("mongoose")


let SubcategorySchema = new mongoose.Schema({
    subcategoryName:{
        type:String,
    

    },
   
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    

    },
})

//schema insert in table and export
const Subcategorymodel =  mongoose.model("Subcategory",SubcategorySchema)
module.exports = Subcategorymodel