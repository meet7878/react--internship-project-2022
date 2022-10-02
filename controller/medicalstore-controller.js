const medicalmodel = require("../model/medicalstore")


//add

module.exports.addmedical = function(req,res){
    let storename =req.body.storename
    let storeaddress = req.body.storeaddress
    let stokeeperId = req.body.stokeeperId
  
   


   let user  = new medicalmodel({
    storename : storename,
    storeaddress : storeaddress,
    stokeeperId : stokeeperId

   })
   

   user.save(function(err,data){
       if(err){
           res.json({msg:"somthing went to wrong wrong",data:err,status:-1})
       }

       else{
           res.json({
               msg:"Succesfully add store detail",
               data:data,
               status:200
           })
       }


   })
}  
//list

module.exports.getAllsmedicaltoredetail = function (req,res){
    medicalmodel.find().populate("stokeeperId").exec(function(err,data){  //joint the table
        if(err){
            res.json({
                msg:"something went to wrongs",
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

module.exports.deletemedicalstore= function(req,res){
    let userId =req.params.userId  //postman ->userId

    medicalmodel.deleteOne({_id:userId},function(err,data){

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

module.exports.updatemedicalstoredetail = function(req,res){
    let storename =req.body.storename
    let storeaddress = req.body.storeaddress
    let storekeeper = req.body.stokeeper



    medicalmodel.updateOne({_id:userId},{storename:storename,storeaddress:storeaddress,storekeeper:storekeeper},function(err,data){
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

