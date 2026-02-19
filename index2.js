import express from 'express';
const app=express();

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
});
 app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("Response from server from for /")
 })