const express = require("express");
const app = express();
const port=3000;

app.get('/',(req,res)=>{
    res.status(200).send("Hello world made by Champa Lal Jat");
})

app.listen(port,()=>{
    console.log(`This application is start at http://localhost:${port}/`)
})

