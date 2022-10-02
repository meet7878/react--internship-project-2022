
const storemodel = require("../model/storekeeeper")


//add

module.exports.addstorekeeperdetail = function(req,res){
    let stkfirstname =req.body.stkfirstname
    let address = req.body.address
    let stateid = req.body.stateid
    let cityid = req.body.cityid
    let patientid = req.body.patientid
    let pincode = req.body.pincode
    let feedbackemail = req.body.feedbackemail
    
    let customersupport = req.body.customersupport
    let contactnum = req.body.contactnum

    
    let role = req.body.role


   let store  = new storemodel ({
    stkfirstname : stkfirstname,
    address : address,
    stateid : stateid,
    cityid : cityid,
    patientid : patientid,
    pincode : pincode,
    feedbackemail : feedbackemail,
    customersupport:customersupport,
    contactnum : contactnum,
    role : role

   })

   store.save(function(err,data){
       if(err){
           res.json({msg:"somthing went to wrong",data:err,status:-1})
       }

       else{
           res.json({
               msg:"storekeeoer detail",
               data:data,
               status:200
           })
       }


   })
}  
//list

module.exports.getAllstore= function (req,res){
    storemodel.find().populate("role").exec(function(err,data){  //joint the table
        if(err){
            res.json({
                msg:"something went to wrong",
                data:data,
                status:-1
            })
        }
        else{
            res.json({msg:" storekeeper user all",
            data:data,
            status:200
           })
        }
    
    })
    
}

//delete

module.exports.deletestore= function(req,res){
    let storeId =req.params.storeId  //postman ->userId

    storemodel.deleteOne({_id:storeId},function(err,data){

        if(err){
            res.json({
                msg:"something went to wrong",
                data:data,
                status:-1
            })
        }
        else{
            res.json({msg:"storekeeoer user remove",
            data:data,
            status:200
           })
        }

    })
}


//update

module.exports.updatstore = function(req,res){
    let stkfirstname =req.body.stkfirstname
    let address = req.body.address
    let stateid = req.body.stateid
    let cityid = req.body.cityid
    let patientid = req.body.patientid
    let pincode = req.body.pincode
    let feedbackemail = req.body.feedbackemail
    
    let customersupport = req.body.customersupport
    let contactnum = req.body.contactnum



    storemodel.updateOne({_id:storeId},{stkfirstname:stkfirstname,address:address,email:email,stateid:stateid,cityid : cityid,patientid :patientid,pincode:pincode,feedbackemail:feedbackemail,customersupport:customersupport,contactnum :contactnum   ,role:role},function(err,data){
        if(err){
            res.json({
                msg:"something went to wrong",
                data:err,
                status:-1})
            
        }
              else{
                  res.json({
                    msg:"updated storekeeper",
                    data:data,
                    status:200 })
               
                }  
        
    })
}

