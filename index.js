//const { request } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const sessioncontroller  = require("./controller/session-controller")
const roleController= require("./controller/role-controller")
const userconstroller = require("./controller/user-controller")
const storecontroller = require("./controller/store-controller")
const medicalstorecontrole = require("./controller/medicalstore-controller")
const categorycontroller = require("./controller/category-controller")
const subcategorycontroller = require("./controller/subcategry-controller")
const statecontroller = require("./controller/state-controller")

const app = express() 

//middle ware
app.use(express.json())  //mobile = accept the json data  from req  and set data into body
app.use(express.urlencoded({extended:true}))//web =accept url encoded data from request and set data into body 

//database connectivity
mongoose.connect('mongodb://localhost:27017/ecom',function(err){
    if(err){
        console.log("db connection is fail");
        console.log(err);


    }else{
        console.log("database is connected");
    }

})

// //url
app.get("/",function(req,res){
    res.write("welcome")
    res.end()
})

app.get("/login",sessioncontroller.login)
app.get("/signup",sessioncontroller.signup)
app.post("/saveuser",sessioncontroller.saveuser)


//role
app.post("/roles",roleController.addRole)
//user
app.post("/users",userconstroller.adduser)
app.get("/users",userconstroller.getAlluser)
app.delete("/users/:userId",userconstroller.deleteuser)
app.put("/users",userconstroller.updateuser)
app.post("/logins",userconstroller.logins)  

//storekeeprere

app.post("/store",storecontroller.addstorekeeperdetail)
app.get("/store",storecontroller.getAllstore)
app.delete("store/:storeId",storecontroller.deletestore)
app.post("/store",storecontroller.updatstore)


// medical store detail

app.post("/medicalstore",medicalstorecontrole.addmedical)
app.get("/medicalstore",medicalstorecontrole.getAllsmedicaltoredetail)
app.delete("/medicalstore",medicalstorecontrole.deletemedicalstore)
app.post("/medicalstore",medicalstorecontrole.updatemedicalstoredetail)


//category

app.post("/category",categorycontroller.categoryadd)
app.get("/category",categorycontroller.getAllcategory)
app.delete("/category/:categoryId",categorycontroller.deletecategory)
app.post("/category",categorycontroller.updatecategory)


//subcategory
app.post("/subcategory",subcategorycontroller.addsubcategory)
app.get("/subcategory",subcategorycontroller.getAllsubcategory)
app.delete("/subcategory",subcategorycontroller.deletesubcategory)
app.post("/subcategory",subcategorycontroller.updatesubcategory)


//state
app.post("/state",statecontroller.addstate)
app.get("/state",statecontroller.getAllstate)
app.delete("/state",statecontroller.deletestate)
app.post("/state",statecontroller.updatestate)

// app.get("/login",function(req,res){
//     res.write("login")
//     res.end()
// })


// app.get("/signup",function(req,res){
//     res.write("signup")
//     res.end()
// })


//server
app.listen(3000,function(){
    console.log("serever will started 3000");
}
)
