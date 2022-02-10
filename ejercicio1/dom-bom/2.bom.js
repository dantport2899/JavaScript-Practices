'use strict'

//BOM = Browser Object Model

function getbBom(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
}

function redirect(url){
    window.location.href = url;
}

function abrirventana(url){
    window.open(url,"","width=400,height=300");
}

getbBom();