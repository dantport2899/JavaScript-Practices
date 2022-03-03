'use strict'

var express = require('express');
var bodyparser =require('body-parser');

var app = express();

//archivos de rutas
var projectroutes = require("./routes/project");

//middleawers
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use("/api", projectroutes);

//exportar
module.exports = app;