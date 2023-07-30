const teacher =  require("./teachermodel")
const user =  require("../user/usermodel")
const bcrypt = require("bcrypt")

exports.addTeacher=(req,res)=>{
    user.findOne({email: req.body.email})
    .then(data=>{
        if(data!= null){
            res.json({
                status:401 ,
                success:false,
                message: `TEACHER WITH EMAIL ${req.body.email} ALREADY EXISTS`
            })
        }
        else{
            let teaObj = new teacher()
            teaObj.name =  req.body.name ,
            teaObj.email =  req.body.email ,
            teaObj.age =  req.body.age ,
            teaObj.phone =  req.body.phone ,
            teaObj.save()
            .then(data=>{
                let userobj = new user()
                userobj.name = req.body.name,
                userobj.password = bcrypt.hashSync(req.body.password,10)
                userobj.email = req.body.email,
                userobj.usertype = 1,
                userobj.teacher_id = data._id
                userobj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        success:true , 
                        message:`TEACHER WITH EMAIL ${req.body.email} REGISTERD SUCCESSFULLY `,
                        data:data,
                        userdata :  udata

                    })
                })

            })
        }
    })
}