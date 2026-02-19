import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello world")
    res.send(req.params.id)

});


// app.get('/:id',(req,res)=>{
//     res.send(req.params.id)
//     // console.log(req.url)
//     // console.log(req.params)
//     //console.log(req.params.id)

// });

app.get('/:id/:email',(req,res)=>{
    res.send(req.params.id+ req.params.email)
    // console.log(req.url)
    // console.log(req.params)

});

app.get('/home',(req,res)=>{
    res.send("Hello world");
})
app.listen(8080,()=>{
    console.log("server started")
});