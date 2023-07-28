'use strict'
const port = 3700;

const app = require('./app');

app.listen(port, ()=>{
    console.log("Servidor de ejemplo ejecutando en "+port);
});