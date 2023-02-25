const userModel = require("../model/user")

const route = require("express").Router()

route.post("/signup", async(req,res)=>{
    try {
        const {email,password} = req.body
        console.log(email,password);
        const user = await userModel.create({
            email:email,
            password:password
        })
        res.json({
            status:"success",
            user
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = route;