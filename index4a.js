// import express from 'express';
// const app=express();



// app.get('/:num1/:num2',(req,res)=>{
//     const n1=Number(req.params.num1);
//     const n2=Number(req.params.num2);
//     const sum=n1+n2;
//     res.send(sum);

// })
// app.listen(8080,()=>{
//     console.log("server running")
// })


// import express from 'express';
// const app=express();

// app.get('/x/:num1/y/:num2/z/:num3',(req,res)=>{
//     const n1=Number(req.params.num1);
//     const n2=Number(req.params.num2);
//     const n3=Number(req.params.num3);
//     const sum=n1+n2+n3;
//     res.send(sum);

// })
// app.listen(8080,()=>{
//     console.log("server running")
// })




import express from 'express';
const app=express();

app.get('/:a/:b/:c/:d',(req,res)=>{  // if u write any thing like a/f/g/h or any aplha it will print hello world
    res.send("Hello Student");

})
app.listen(8080,()=>{
    console.log("server running")
})