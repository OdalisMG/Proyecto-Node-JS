const express = require('express');
const app =  express();
const port = 3700;

app.get("/" , (req, res)=> {
    console.log("Get ejecutado en raiz");
    res.send("Mi primer endpoint");
});

app.listen(port,()=>{
    console.log("Servidor de ejemplo ejecutando en"+port);
});
