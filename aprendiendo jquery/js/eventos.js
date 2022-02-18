$(document).ready(function(){

    //Mouse over y Mouse out

    var caja =$('#caja');
/*
    caja.mouseover(function(){
        $(caja).css("background","red");
    });

    caja.mouseout(function(){
        $(caja).css("background","green");
    });
*/
    //hover
    caja.hover(cambiarojo, cambiaverde);

    function cambiarojo(){
        $(caja).css("background","red");
    }

    function cambiaverde(){
        $(caja).css("background","green");
    }

    //click, doble click

    caja.click(()=>{
        caja.css("background","blue").css("color","blue");
    });

    caja.dblclick(()=>{
        caja.css("background","pink").css("color","yellow");
    });

    //focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    var sigueme = $("#sigueme");

    nombre.focus(()=>{
        nombre.css("border","2px solid green");
    });

    nombre.blur(()=>{
        nombre.css("border","2px solid transparent");
        
        datos.text(nombre.val()).show();
    });

    //Mouse down y Mouseup
    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });


    //mouse move
    $(document).mousemove(function(){
        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);
    });
});