const express = require("express")
const connectDB = require('./config/db')
const app = express()



//connect database
connectDB()

//init middleware to accept json data
app.use(express.json({extended:false}))


const PORT = process.env.PORT || 5000



//define routes
app.use("/api/users", require('./routes/users'))
app.use("/api/contacts", require('./routes/contact'))
app.use("/api/auth", require('./routes/auth'))


app.get("/",(req,res)=>{
    res.json({msg:"Welcome to the contact keeper API"})
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}...`)
})