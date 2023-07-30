const  router  =  require("express").Router()
const studentController  = require("../api/student/studentController")
const teacherController  = require("../api/teacher/teacherController")

router.post("/addstudent" , studentController.addStudent)
router.post("/addteacher" , teacherController.addTeacher)
module.exports = router