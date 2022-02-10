'use strict'

window.addEventListener('load',function(){
    //timers
    var tiempo = this.setInterval(function(){
        console.log("set interval ejecutando");

        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize ="20px";
        }else{
            document.querySelector("h1").style.fontSize ="50px";
        }
    },3000);
});