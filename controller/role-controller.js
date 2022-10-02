const Rolemodel =require("../model/role-node")

module.exports.addRole=function (req,res){

    //db insert role
    console.log(req.body.roleName)

    let role = new Rolemodel({
        roleName:req.body.roleName
      })

    role.save(function(err,success){   //call back function
        if(err){
            console.log(err);
            res.json({
                msg:"something went to wrong",
                status:-1,
                data:req.body
            })

        }else{
            res.json({
                msg:" role added",
                status:200,
                data:success
            })

        }

    })

    

    
   

}

// module.exports.updateRole=function(req,res){

// }


// module.exports.deleteRole=function(req,res){

// }

// module.exports.getAllRoles(req,res){

// }

// module.exports.getRoleById(req,res){

// }