//Estructuras   que toman las decisiones dependiendo de una condición
//if, else if, else
let edad=15;

if(edad>=18){
    console.log("Felicidades, puedes votar");
}else{
    console.log("Lo siento, no puedes votar");
}
//if -else if - else(lo utilizamos cuando tenemos varias condiciones)
//Evaluando la nota del estudiante
let nota=4;
if(nota>=9 && edad<=10){
    console.log("Excelente");
}else if(nota>=7 && nota<9){
    console.log("Bueno");
}else if(nota>=5 && nota<7){
    console.log("Regular");
}else{
    console.log("Reprobado");
}
//switch-case: se utiliza para casos certeroz a evaluar
//formas de pago
let formaPago="efectivo";
switch(formaPago){
    case "efectivo":
        console.log("tu forma de Pago es en efectivo ");
        break;
    case "tarjeta":
        console.log("tu forma de Pago es con tarjeta de crédito");
        break;
    case "bitcoin":
        console.log("tu forma de Pago es con bitcoin");
        break;
        
        default:
        console.log("forma de pago no reconocida");
}