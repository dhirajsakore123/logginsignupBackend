const jwt=require("jsonwebtoken")
const secretKey="dwevt23e32"

const audMiddleware=(req,res,next)=>{
    const bearer=req.headers["authorization"];
 
    if(bearer===undefined){
       return res.send({msg:"no token"})
    }
    const token=bearer.split(" ")[1];
    if(token===undefined){
       return res.send({msg:"user not authorized person or session expired"})
    }
    const vali= jwt.verify(token,secretKey)
    if(vali){
       return next()
    }
    return res.send({msg:"not authorized for this particular resorces"})
 
 }
 
 module.exports=audMiddleware