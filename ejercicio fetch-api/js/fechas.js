'use strct'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

var textohora = `
    El año es: ${year}
    El mes es: ${mes+1} //los meses se cuentan desde 0;
    El dia es: ${dia}
    La hora es: ${hora}
    Los munitos son: ${minutos}
`;
console.log(fecha);
console.log(textohora);