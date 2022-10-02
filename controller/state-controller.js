const statemodel = require("../model/state-model")




//add

module.exports.addstate = function(req,res){
    let statename =req.body.statename
  
  


   let state  = new statemodel({
    statename : statename,

   })
   

   state.save(function(err,data){
       if(err){
           res.json({msg:"somthing went to wrong",data:err,status:-1})
       }

       else{
           res.json({
               msg:"state done",
               data:data,
               status:200
           })
       }


   })
}  
//list

module.exports.getAllstate = function (req,res){
    statemodel.find(function(err,data){  //joint the table
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

module.exports.deletestate= function(req,res){
    let stateId =req.params.stateId  //postman ->userId

    statemodel.deleteOne({_id:stateId},function(err,data){

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

module.exports.updatestate = function(req,res){

    let statename =req.body.statename
    



    statemodel.updateOne({_id:stateId},{statename:statename},function(err,data){
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

