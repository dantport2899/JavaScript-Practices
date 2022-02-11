'use strict'

window.addEventListener('load',function(){
    
    function intervalo(){
        var tiempo = setInterval(function(){  //establecer settimeout para programar una accion que se ejecute solo una vez
            
            console.log("set interval ejecutando");
    
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize ="20px";
            }else{
                document.querySelector("h1").style.fontSize ="50px";
            }
        },1000);
        return tiempo;
    }
    
    //timers

    var tiempo = intervalo();
   
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", ()=>{
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", ()=>{
        alert("Has iniciado el intervalo en bucle");
        tiempo = intervalo();        
    });
});