

import express  from "express"
const app=express();
app.use(express.json())
app.listen(8080)

const logger=(req,res,next)=>{
    const newuse=req.body;//using post man body token :1234
    console.log(newuse);

    if(newuse.token==="1234"){
        next();
    }else{
        res.send("invalid URL");
    }
}

app.use(logger);

app.post("/",(req,res)=>{
    res.send("welcome to protected route");;
})