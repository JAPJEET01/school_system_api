const express = require("express")
const app = express()
const port = 5001
const db  =  require("./config/db")
const router  = require("./routes/router")
app.use(express.urlencoded({extended:true}))

app.use("/admin" , router)

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT ${port}`)
})
