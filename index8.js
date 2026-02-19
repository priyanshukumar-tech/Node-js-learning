import express from 'express';
const app=express();

app.listen((8080),()=>{
    console.log("server running")
});

app.use(express.json())  // to parse json data from request body

let users=[
        {id:1,name:"student1",email:"student1@gmail.com"},
        {id:2,name:"student2",email:"student2@gmail.com"},
        {id:3,name:"student3",email:"student3@gmail.com"}
    ]

app.get('/:id',(req,res)=>{
    const user=users.find(user=>user.id===Number(req.params.id));
    if(user){
        res.send(user);
    }
})

app.post('/',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.json(user);
})

app.delete('/:id',(req,res)=>{
    const userindex=users.find(userindex=>userindex.id==Number(req.params.id));
    delete users[userindex];
    res.send("user deleted");
})