'use strict'

var express = require('express');
var bodyparser =require('body-parser');

var app = express();

//archivos de rutas


//middleawers
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//CORS


//RUTAS
app.post('/test',(req,res)=>{
    console.log(req.body.nombre);
    console.log(req.query.edad);

    res.status(200).send({
        message: "Hola mundo desde mi api de node JS"
    });
});

//exportar
module.exports = app;