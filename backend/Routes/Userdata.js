const express = require('express')
const User = require('../modell/User')
const { body, validationResult } = require("express-validator");
const router = express.Router()


router.post('/userdata',
// [
//     body('email','incorrect email').isEmail(),
//     body('password','incorrect password').isLength({min:5})],
async(req,res)=>{
   // const err = validationResult(req);

    // if(!err.isEmpty()){
    //     return res.status(400).json({err:err.array()})
    // }

    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        res.json({success:true})
    }catch(err){
        console.log(err);
        res.json({success:false})
    }
})




router.post(
  "/userlogin",
  // [
  //     body('email','incorrect email').isEmail(),
  //     body('password','incorrect password').isLength({min:5})],
  async (req, res) => {
    // const err = validationResult(req);

    // if(!err.isEmpty()){
    //     return res.status(400).json({err:err.array()})
    // }
    let email=req.body.email;
    try{
        let userinfo= await User.findOne({email});

        if(userinfo.password===req.body.password){
            res.json({success:true})
        }
    }catch(err){
        console.log(err);
        res.json({success:false})
    }
    
    
  }
);





module.exports = router;