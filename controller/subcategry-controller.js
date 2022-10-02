const Subcategorymodel = require("../model/subcategory-model")
const Usermodel = require("../model/subcategory-model")



//add

module.exports.addsubcategory = function(req,res){
    let subcategoryName =req.body.subcategoryName
   
    let categoryId = req.body.categoryId


   let subuser  = new Subcategorymodel({
    subcategoryName : subcategoryName,
       categoryId  : categoryId 

   })
   

   subuser.save(function(err,data){
       if(err){
           res.json({msg:"somthing went to wrong",data:err,status:-1})
       }

       else{
           res.json({
               msg:"signup done",
               data:data,
               status:200
           })
       }


   })
}  
//list

module.exports.getAllsubcategory = function (req,res){
    Subcategorymodel.find().populate("categoryId").exec(function(err,data){  //joint the table
        if(err){
            res.json({
                msg:"something went to wrong",
                data:data,
                status:-1
            })
        }
        else{
            res.json({msg:"user all",
            data:data,
            status:200
           })
        }
    
    })
    
}

//delete

module.exports.deletesubcategory= function(req,res){
    let subcategoryId =req.params.subcategoryId  //postman ->userId

    subcategoryId.deleteOne({_id:subcategoryId},function(err,data){

        if(err){
            res.json({
                msg:"something went to wrong",
                data:data,
                status:-1
            })
        }
        else{
            res.json({msg:"user remove",
            data:data,
            status:200
           })
        }

    })
}


//update

module.exports.updatesubcategory = function(req,res){
    let subcategoryName =req.body.subcategoryName
    let subcategoryId = req.body.subcategoryId
    let categoryId = req.body.categoryId



    Usermodel.updateOne({_id:subcategoryId },{subcategoryName:subcategoryName,categoryId:categoryId},function(err,data){
        if(err){
            res.json({
                msg:"something went to wrong",
                data:err,
                status:-1})
            
        }
              else{
                  res.json({
                    msg:"updated",
                    data:data,
                    status:200 })
               
                }  
        
    })
}

