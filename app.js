const express = require("express")
const app = express()
const port = 5001
const db  =  require("./config/db")

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT ${port}`)
})
