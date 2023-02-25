const express = require("express")
const router = express.Router()

//@route GET api/contact
//desc   get all users contacts
//access private
router.get("/",(req,res)=>{
    res.send("get all contacts")
})
//@route POST api/contact
//desc   Add a new contact
//access private
router.post("/",(req,res)=>{
    res.send("add new contact")
})
//@route PUT api/contact
//desc   update contacts
//access private
router.put("/:id",(req,res)=>{
    res.send("update user's contacts")
})
//@route DELETE api/contact
//desc   Add a new contact
//access private
router.delete("/:id",(req,res)=>{
    res.send("delete user's contacts")
})

module.exports = router;