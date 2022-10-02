const Usermodel = require("../model/user-model")
const bcrypt = require("bcrypt") // npmjs bcrypt


//add

module.exports.adduser = function(req,res){
    let firstname =req.body.firstname
    let email = req.body.email
    let password = req.body.password
    let number = req.body.number
    //encrypt
    let encypassword = bcrypt.hashSync(password,10)
    let role = req.body.role


   let user  = new Usermodel({
       firstname : firstname,
       email : email,
       password : encypassword,
       number : number,
       role : role

   })
   

   user.save(function(err,data){
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

module.exports.getAlluser = function (req,res){
    Usermodel.find().populate("role").exec(function(err,data){  //joint the table
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

module.exports.deleteuser= function(req,res){
    let userId =req.params.userId  //postman ->userId

    Usermodel.deleteOne({_id:userId},function(err,data){

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

module.exports.updateuser = function(req,res){
    let userId = req.body.userId
    let firstname = req.body.firstname
    let email = req.body.email
    let password =req.body.password
    let number = req.body.number
    let role = req.body.role



    Usermodel.updateOne({_id:userId},{firstname:firstname,number:number,email:email,password:password,role:role},function(err,data){
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

//login
module.exports.logins = function(req,res){

    let param_email = req.body.email
    let param_password = req.body.password

    let iscorrect = false;

    Usermodel.findOne({email:param_email},function(err,data){
        if(data){
            let ans = bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                iscorrect =true
            }
        }

        if(iscorrect ==false){
            res.json({msg:"Invalid credentials..",data: req.body, status:-1})
        } else{
            res.json({msg:"login",data:data ,status:200})
        }
    }) 
}
