const userModel = require("../model/user");
const route = require("express").Router();

route.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      return res.json({ 
        message: "user already exists"
     });
    }

    if (password !== confirmpassword) {
      return res.json({ 
        message: "password doesnt match" 
    });
    }

    
    user = await userModel.create({email, password});
    res.json({user});
    
  } catch (error) {
    res.json({
        status:"failed",
        message:error.message
    })
  }
});

module.exports = route;