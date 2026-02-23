import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const SECRET = "lpu";

app.listen(8080, () => {
    console.log("server running");
});

// token jo tumhe index14.js me mila tha
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamhvbiIsImVtYWlsIjoiamhvbkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDAwNywiZXhwIjoxNzcxODM3NjA3fQ.TM06vpVju6pvLdETZpluP8Rx5f8HmtiILiHDn9e1vXI";

const user = jwt.verify(token, SECRET);
console.log(user);