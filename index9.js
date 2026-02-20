// import express from 'express';

// const app =express();

// app.listen((8080),()=>{
//     console.log("server running")
// });


// const logger=(req,res,next)=>{
//     // console.log(req.url);
//     req.message="This is logger function";
//     next();
// }
// // app.use(logger);        

// app.get("/",logger,(req,res)=>{
//     console.log(req.message)
//     res.json(req.url);
// })


// app.get("/home",(req,res)=>{
//     console.log(req.message)
//     res.json(req.url);
// })


import express from 'express';

const app=express();

const logger=(req,res,next)=>{
    req.message="This is logger function";
    next();
}

app.get("/",logger,(req,res)=>{
    console.log(req.message);
    res.send("this is home route")
});


app.get("/home",(req,res)=>{
    res.json(req.url)
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});






















