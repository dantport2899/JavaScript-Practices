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

});