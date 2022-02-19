$(document).ready(function(){
    
    //load
    var datos = $('#datos');
    // datos.load('https://reqres.in/');

    //get y post
    $.get('https://reqres.in/api/users',{page: 2}, function(response){
        console.log(response);
        response.data.forEach((element,index) => {
            datos.append("<p>"+element.first_name+" "+element.last_name+"</p>");            
        });
    });


    $('#formulario').submit(function(e){
        e.preventDefault();  //evita que nos redireccione a la pagina del formulario

        var usuario = {
            "name": $("input[name='name']").val(),
            "web":  $("input[name='web']").val()
        };
        
        console.log(usuario);
    
        // $.post($(this).attr("action"), usuario, function(response){
        //     console.log(response);
        // }).done(function(){
        //     alert("Usuario: "+usuario.name+" registrado con extio");
        // });

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr("action"),
            data: 'usuario',
            beforeSend: function(){
                console.log("Envio Usuario...");
            },
            success: function(response){
                console.log(response);
                alert("Usuario: "+usuario.name+" registrado con extio");
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            timeout: 2000
        });

        return false;
    });
});