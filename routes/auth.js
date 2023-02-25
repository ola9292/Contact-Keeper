const express = require("express")
const router = express.Router()

//@route GET api/auth
//desc   get a logged in user
//access private
router.get("/",(req,res)=>{
    res.send("get logged in user")
})
//@route GET api/auth
//desc   Auth user and get token
//access private
router.post("/",(req,res)=>{
    res.send("log in user")
})

module.exports = router;