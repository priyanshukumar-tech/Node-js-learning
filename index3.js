import express from 'express';
const app=express();

app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("Response from server from for /")
})

app.get("/home",(req,res)=>{
    console.log(req.url)
    res.send("Response from server for /home")
})

app.get("/home/page1",(req,res)=>{
    console.log(req.url)
    res.send("Response from server for /home/page1")
})
app.listen(8080,()=>{
    console.log("Server started at port 8080")
})