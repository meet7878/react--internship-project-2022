const fs = require("fs")

function login(req,res){

    res.write("login ")
    res.end()


}



function signup(req,res){
    let signuphtml= fs.readFileSync("./views/signup.html")
    res.write(signuphtml)
    res.end()
} 

function saveUser(req,res){
    console.log(req.body)

    res.json({
        msg:"done dona done",
        status:200,
        data:req.body
        
    })


    // res.write("saved data")
    // res.end()
}



module.exports.login=login
module.exports.signup=signup
module.exports.saveuser=saveUser
