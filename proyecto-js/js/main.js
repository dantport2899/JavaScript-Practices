$(document).ready(function(){

    //cargar elementos necesarios para el index

    if(window.location.href.indexOf('index') >-1){
        //slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });

         //posts
        var posts = [
            {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia: ' + moment().date()+' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, blanditiis error. Ipsa incidunt cumque ratione, hic eius eaque doloremque soluta sequi dignissimos, neque sint quisquam quo exercitationem veritatis iure! Omnis!'
            },
            {
                title: 'Prueba de titulo 2',
            date: 'Publicado el dia: ' + moment().date()+' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, blanditiis error. Ipsa incidunt cumque ratione, hic eius eaque doloremque soluta sequi dignissimos, neque sint quisquam quo exercitationem veritatis iure! Omnis!'
            },
            {
                title: 'Prueba de titulo 3',
            date: 'Publicado el dia: ' + moment().date()+' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, blanditiis error. Ipsa incidunt cumque ratione, hic eius eaque doloremque soluta sequi dignissimos, neque sint quisquam quo exercitationem veritatis iure! Omnis!'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia: ' + moment().date()+' de ' +moment().format("MMMM")+' del '+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, blanditiis error. Ipsa incidunt cumque ratione, hic eius eaque doloremque soluta sequi dignissimos, neque sint quisquam quo exercitationem veritatis iure! Omnis!'
            }
        ]

        posts.forEach((item,index)=>{
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas...</a>
            </article>
            `;

            $("#posts").append(post);
        });
    }
    
    //cargar elementos en la pagina about
    if(window.location.href.indexOf('about') >-1){

        //Acordeon de infromacion
        $("#acordeon").accordion();
    }

    //cargar elementos en la pagina reloj
    if(window.location.href.indexOf('reloj') >-1){
        
        //funcionalidad seccion reloj
        setInterval(() => {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
        
    }


    // cargar solo en la seccion de contacto
    if(window.location.href.indexOf('contact') >-1){

        //agregar selector de fecha por calendario
        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });


        //agregas la funcionalidad de validacion
        $.validate({
        });
    }
   

    //selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    //scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 600);

        return false;
    });

    //login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p")
        about_parrafo.html("<strong>Bienvenido, "+form_name+"</strong><br>");
        about_parrafo.append('<a href="#" id="logout">Cerrar sesion</a>');
        $("#login").hide();
    }

    $('#logout').click(function(){
        localStorage.clear();
        location.reload();
    });
});