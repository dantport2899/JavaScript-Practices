$(document).ready(function(){
    reloadlinks();

    $('#add_button').click(function(){
        $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
        reloadlinks();

        $('#add_link').val('');
    });
     
    

});

function reloadlinks(){
    $('a').each(function(index){
        var a = $(this);
        var enlace = a.attr('href');

        a.attr('target','blanck');
        a.text(enlace);
    });
}