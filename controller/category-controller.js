const categorymodel = require("../model/category-model")
const Usermodel = require("../model/category-model")


module.exports.categoryadd = function(req,res){
    let categoryname =req.body.categoryname
  
  


   let category  = new categorymodel({
    categoryname : categoryname,
   })
   

   category.save(function(err,data){
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

module.exports.getAllcategory = function (req,res){
    categorymodel.find(function(err,data){  //joint the table
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

module.exports.deletecategory= function(req,res){
    let categoryId =req.params.categoryId  //postman ->userId

    categorymodel.deleteOne({_id:categoryId},function(err,data){

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

module.exports.updatecategory = function(req,res){
    let categoryId= req.body.categoryId
    let categoryname =req.body.categoryname
  



    Usermodel.updateOne({_id:categoryId},{categoryname:categoryname},function(err,data){
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

