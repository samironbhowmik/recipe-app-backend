const recipeModel = require("../model/recipe")
// const userModel = require("../model/user")

const route = require("express").Router()

route.post("/recipies", async(req,res)=>{
    try {
        // let users = await userModel.findOne({email})
        const {title, author, ingredients, directions} = req.body
        const recipies = await recipeModel.create({
            title:title,
            author:author,
            // image:image,
            ingredients:ingredients,
            directions:directions
        })

        res.json({
            status:"success",
            // users,
            recipies
        })

    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = route