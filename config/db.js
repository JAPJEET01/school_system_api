const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/oneday")
.then(
    console.log("DB CONNECTED")
    )
    .catch(err=>{
        
     console.log("AN ERROR OCCURED : " ,  err)
})