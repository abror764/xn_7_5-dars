const express = require('express')
const cors = require('cors')
require("dotenv").config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

app.get("/" , (req,res) =>{
    res.json({
        message:"backend ishladi"
    })
})

app.listen(PORT, () =>{
console.log("ishladi:" + PORT);
})