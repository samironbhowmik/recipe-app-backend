const recipeModel = require("../model/recipe")
const route = require("express").Router()

route.get("/search/:title", async(req,res)=>{
    try {
        const {title} = req.params
        const list = await recipeModel.find({title:title})
        console.log(list);

        // const list = await recipeModel.findOne({title:(req.params.title)})
        // console.log(list);
        res.json({
            status:"success",
            list
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = route;