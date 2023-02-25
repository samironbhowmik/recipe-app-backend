const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    title:String,
    author:String,
    image:String,
    ingredients:String,
    direction:String
})

const recipeModel = mongoose.model("recipeModel", recipeSchema)
module.exports = recipeModel;