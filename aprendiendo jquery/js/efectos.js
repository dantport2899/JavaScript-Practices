$(document).ready(()=>{
    var caja = $('#caja');
    var btn =  $('#todoenuno');

    $('#mostrar').hide();
    caja.hide('fast');


    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();

        caja.hide('fast');
    });

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();

        caja.show(6000);
    });

    //todo simplificado en un solo boton
    btn.click(function(){
        caja.toggle('fast');  //otros metodos slideToggle()
    });


    //animaciones

    $('#animar').click(function(){
        caja.animate({marginLeft: '500px',
                        fontSize: '40px',
                        height: '120px'
                    }, 'slow')
            .animate({
                borderRadius: '900px',
            },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow');
    });
});