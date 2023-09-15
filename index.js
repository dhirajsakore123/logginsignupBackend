const express=require("express")
const cors=require("cors")
const  route  = require("./router/UserRouter")
const app=express()
const port=4000

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/user",route)

app.listen(port,()=>{
    try{
     console.log(`server is running on port No ${port}`)
    }
    catch(err){
        console.log(err)
    }
})