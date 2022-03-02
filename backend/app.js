'use strict'

var express = require('express');
var bodyparser =require('body-parser');

var app = express();

//archivos de rutas
var projectroutes = require("./routes/project");

//middleawers
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//CORS


//RUTAS
app.use("/api", projectroutes);

//exportar
module.exports = app;