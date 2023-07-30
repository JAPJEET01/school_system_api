const mongoose =  require("mongoose")
const userSchema = new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    password:{type:String, default:""},
    usertype:{type:Number, default:0}, // 0 =  student , 1 = teacher  .  2  =  admin
    student_id:{type:mongoose.Types.ObjectId, default:"" ,  ref : 'student'},
    teacher_id:{type:mongoose.Types.ObjectId, default:"" ,  ref : 'teacher'},
    created_At:{type:Date, default:Date.now()},
    status:{type:Boolean, default:true},
})
module.exports = mongoose.model("user" , userSchema)