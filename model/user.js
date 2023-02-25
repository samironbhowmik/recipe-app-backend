const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:String,
    password:String
})

const userModel = mongoose.Schema("userModel", userSchema)
module.exports = userModel