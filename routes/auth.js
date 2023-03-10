const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator');
const { route } = require("./users")

//@route GET api/auth
//desc   get a logged in user
//access private
router.get("/",auth, async (req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})

//@route POST api/auth
//desc   auth user & get token
//access private
router.post("/",[
    body('email','Please enter a valid email').isEmail(),
    body('password','Password is required').exists()
],async (req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
   const{email, password} = req.body
   try{
    let user = await User.findOne({ email});

    if(!user){
        return res.status(400).json({msg:"Invalid cridentials"})
    }

   const isMatch = await bcrypt.compare(password, user.password);

   if(!isMatch){
    return res.status(400).json({msg:"Invalid cridentials"})
   }

   const payload = {
    user:{
        id:user.id
    }
}

jwt.sign(payload, config.get('jwtSecret'),{
    expiresIn:3600000,
},
(err, token)=>{
    if(err) throw err
    res.json({token})
})
}catch(err){
    console.error(err.message);
    res.status(500).send('Server Error')

}

   
})

module.exports = router;