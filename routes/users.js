const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

//@route POST api/users
//desc   register a user
//access public
router.post("/",[
    body('name','Name is required').not().isEmpty(),
    body('email','Please enter a valid email').isEmail(),
    body('password','Please enter a password with 6 or more characters').isLength({
        min:6
    })
],async (req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
   const{email, name, password} = req.body

   try{
        let user = await User.findOne({ email});

        if(user){
            return res.status(400).json({msg:"user exists"})
        }

        user = new User({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt)

        await user.save()
        
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
        }
        )
   }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')

   }

   
})

module.exports = router;