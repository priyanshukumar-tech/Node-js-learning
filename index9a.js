import express from 'express';

const app =express();

app.listen((8080),()=>{
    console.log("server running")
});


let validcode =1234;
const auth=(req,res,next)=>{
    if(req.url==="/1234"){
        next();        
    }
    else{
        res.send("invalid credential");
    }
   
}

app.use(auth);

app.get("/1234",(req,res)=>{
    res.send("Welcome");
    
})


