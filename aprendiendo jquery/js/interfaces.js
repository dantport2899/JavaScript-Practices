$(document).ready(function(){
    var elemento = $(".elemento");

    //Mover elemento por la pagina
    elemento.draggable();

    //Redimencionar 
    elemento.resizable();

    //seleccionar
    var lista = $('.lista-seleccionable');

    // lista.selectable();
    lista.sortable();   

    //drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area");
        }
    });

    //efectos
    $("#mostrar").click(function(){
        // $(".caja-efectos").fadeToggle('slow');
        // $(".caja-efectos").slideToggle('slow');
        $(".caja-efectos").toggle('shake', 4000);

    });

    //tooltip
    $(document).tooltip();

    //dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    //datepicker
    $("#calendario").datepicker();

    //tabls

    $("#pestanas").tabs();

});