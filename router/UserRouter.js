const {register,login,dashbord} = require("../controller/Controller")
const audMiddleware=require("../middleware/Middleware")
const router=require("express").Router()


router.post("/api/register",register)
router.post("/api/login",login)
router.get("/api/dashbord",audMiddleware,dashbord)


module.exports=router