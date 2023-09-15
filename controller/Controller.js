const bcrypt= require("bcrypt")
const jwt =require("jsonwebtoken")
const saltround=10
const secretKey="dwevt23e32"
let arr=[]

const register=(req,res)=>{
    const details=req.body;
   const find=arr.find(item=>details.email===item.email)

   if(find){
    return res.send({msg:"email is already registered"})
   }

   const hashpass=bcrypt.hashSync(details.password,saltround)
   
   const temp={
    name:details.name,
    phoneno:details.phone,
    email:details.email,
    password:hashpass,

   }
   arr.push(temp)
   const token=jwt.sign({email:details.email},secretKey,{expiresIn:"1d"})
   res.send({msg:"user is registered",result:arr,token:token})
}

const login=async (req,res)=>{
    // const result=Data.filter(item=>item.id==req.params.id)
    const details=req.body;
    const find=arr.find(item=>details.email===item.email);
    if(!find){
      return res.send({mes:"user not regestered"})
    }
     const validate=await bcrypt.compare(details.password,find.password);
     if(!validate){
      return res.send({msg: "user password is wrong"})
     }
     const token=jwt.sign({email:details.email},secretKey,{expiresIn:"1d"})
     return res.send({msg:"user is logged in sucessfully",token:token})
    
  }

  const dashbord=(req,res)=>{
    const data=arr.find()
    res.send({msg:"this is dashbord",details})
  }

module.exports={register,login,dashbord}