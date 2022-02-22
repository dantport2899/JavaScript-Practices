var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'Disco',
    valocidad_maxima: '60km/h',
    cambia_color: function(nuevo_color){
        //bicicleta.color =nuevo_color;
        this.color = nuevo_color;
    }
};

bicicleta.cambia_color("Azul");
