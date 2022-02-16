'use strict'

window.addEventListener('load', () => {  //al hacer esto ya no es necesario cargar el script al final del html

    function cambiarcolor() {
        console.log("Me has dado click");

        var bg = boton.style.background;
        if (bg == 'green') {
            boton.style.background = "red";
            boton.style.padding = "10px";
        } else {
            boton.style.background = " green";
            boton.style.padding = "1px solid #ccc";
        }

        return true;
    }
    var boton = document.querySelector("#boton");

    //click
    boton.addEventListener('click', function () {
        cambiarcolor();
        this.style.border = '10px solid black';  //hace referencia al elemento al que se le da click en ese momento
    });

    //mouse over

    boton.addEventListener('mouseover', function () {
        boton.style.background = "#ccc";
    });

    //Mouseout

    boton.addEventListener('mouseout', function () {
        boton.style.background = "black";
        boton.style.color = "white";
    });


    //focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("Estas dentro del input");
    });

    //blur

    input.addEventListener('blur', function () {
        console.log("Estas fuera del input");
    });


    //keydown
    input.addEventListener('keydown', function (event) {
        console.log("[keydown]: ", event.key);  //tomar las teclas pulsadas en el input
    });


    //keypress
    input.addEventListener('keydown', function (event) {
        console.log("[keypress]: ", event.key);  //tomar las teclas pulsadas en el input
    });


    //keyup
    input.addEventListener('keyup', function (event) {
        console.log("[keyup]: ", event.key);
    });

});

//end load