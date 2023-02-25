const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connectDB");
const signup = require("./routes/signup")
const signin = require("./routes/signin")
const recipes = require("./routes/recipes")
const search = require("./routes/search")

const cors = require("cors")
const app = express();
dotenv.config();
app.use(express.json());

app.use(cors())

app.use("/", signup)
app.use("/",signin)
app.use("/",recipes)
app.use("/",search)

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`App is listening at port ${process.env.PORT}`);
});
