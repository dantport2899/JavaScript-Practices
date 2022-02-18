$(document).ready(function(){
    //selector de id
    var rojo =  $("#rojo");
    rojo.css('background','red').css('color','white');

    var amarillo =  $("#amarillo");
    amarillo.css('background','yellow').css('color','blue');


    $("#verde").css('background','green').css('color','white');
    console.log(rojo);

    //selectores de clases
/*
    $('.sinborde').click(function(){
        console.log('Click dado')
        $(this).addClass('zebra');
    });
*/
    //selectores de etqueta
    var parrafo  = $('p');
    parrafo.css('width','60%').css('height','30px').css('margin','auto').css('text-align','center').css("margin-bottom","10px");
    parrafo.css("cursor","pointer");

    parrafo.click(function(){
        var t = $(this);
        if(t.hasClass('zebra')){
            t.removeClass('zebra');
            t.addClass('redondo');
        }else{
            t.addClass('zebra');
            t.removeClass('redondo');
        }
        console.log("cambiado")
    });

    //selectores de atributo
    var google = $('[title="Google"]');
    google.css("color","green");

    var facebook = $('[title="facebook"]');
    facebook.css("color","red");


    //otros
    $('p, a').addClass('margen-superior');

    var busqueda = $('#caja').parent().find('.resaltado'); //encontrar un elemento con esa clase dentro del div caja
    console.log(busqueda);
});