const mongoose =  require("mongoose")
const student = new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    age:{type:Number, default:""},
    phone:{type:Number, default:""},
    created_At:{type:Date, default:Date.now()},
    status:{type:Boolean, default:true},
})
module.exports = mongoose.model("student" , student)