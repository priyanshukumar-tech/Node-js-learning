import express from 'express';

const app =express();

app.listen((8080),()=>{
    console.log("server running")
});


let validcode =1234;
const auth=(req,res,next)=>{
    const code=Number(req.params.code);
    if(code===validcode){
        next();        
    }
    else{
        res.send("invalid credential");
    }
   
}

app.get("/:code",auth,(req,res)=>{
    res.send("Welcome");
    
})


