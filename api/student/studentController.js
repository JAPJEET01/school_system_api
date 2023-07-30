const student =  require("./studentmodel")
const user =  require("../user/usermodel")
const bcrypt =  require("bcrypt")

exports.addStudent=(req,res)=>{
    user.findOne({email: req.body.email})
    .then(data=>{
        if(data!= null){
            res.json({
                status:401 ,
                success:false,
                message: `STUDENT WITH EMAIL ${req.body.email} ALREADY EXISTS`
            })
        }
        else{
            let stuObj = new student()
            stuObj.name =  req.body.name ,
            stuObj.email =  req.body.email ,
            stuObj.age =  req.body.age ,
            stuObj.phone =  req.body.phone ,
            stuObj.save()
            .then(data=>{
                let userobj = new user()
                userobj.name = req.body.name,
                userobj.password = bcrypt.hashSync(req.body.password,10)
                userobj.email = req.body.email,
                userobj.usertype = 0,
                userobj.student_id = data._id
                userobj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        success:true , 
                        message:`STUDENT WITH EMAIL ${req.body.email} REGISTERD SUCCESSFULLY `,
                        data:data,
                        userdata :  udata

                    })
                })

            })
        }
    })
}