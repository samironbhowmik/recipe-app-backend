const express = require('express');
const userModel = require('../model/user');
const route = express.Router();


route.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email,password);
        const user = await userModel.findOne({email}).select('+password');

        if(!user) {
           return res.json({
                status: "failed",
                message: 'User does not exits'
            })
        }

        const isMatch = await user.matchPassword(password);
    
        if(!isMatch) {
           return  res.json({
                status: "failed",
                message: 'Incorrect Password',
            })
        }

        const token = await user.generateToken();
        const options = {
            httpOnly: true,
        }

        res.cookie("token", token, options).json({
            status: "success",
            user,
            token,
        })
    } catch (error) {
          res.json({
            status: "failed",
            message: error.message,
          })
    }
});




module.exports = route
