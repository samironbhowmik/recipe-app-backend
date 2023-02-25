const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://samiron:recipe@cluster0.hiwr8uv.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Database Connected!");
    })
}

module.exports = connectDB