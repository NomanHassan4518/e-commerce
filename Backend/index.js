const express = require('express');
const app =express();

app.get("/",(req,resp)=>{
    resp.send("api is working");
})

app.listen(5000)