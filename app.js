const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connectDB");

const app = express();
dotenv.config();
app.use(express.json());


app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`App is listening at port ${process.env.PORT}`);
});
