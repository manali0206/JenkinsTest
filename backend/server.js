const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get('/', (req,res)=>{
    res.send("Hello from express")
})

app.listen(3000, ()=>{
    console.log("Server running on port 5000")
})