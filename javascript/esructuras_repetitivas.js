//repetir bloques de codigo (bucles)

//ciclo for: se utiliza cuando sabemos cuantas veces queremos repetir un bloque de codigo
/**
 * primer elemento = indica el inicio del bucle
 * segundo elemento = indica la condición para que el bucle siga ejecutándose (hasta donde va a llegar)
 * tercer elemento = indica el incremento o decremento del contador     
  */
//imprimir los numeros del 1 al 10
console.log("----------uso de FOR--------");
for(let i=1; i<=10; i++){
    console.log(i);
}

console.log("----------uso de WHILE--------");
//ciclo while -> cuando no sabemos cuantas veces se va a repetir el bloque de codigo, pero si sabemos la condición para que se ejecute  
//imprimiendo los número del 1 al 10
let j = 1;
while(j<=10){
    //condicion
console.log(j);
j++;
}

console.log("----------uso de DO-WHILE--------");
//ciclo do-while -> se ejecuta al menos una vez, ya que la condición se evalúa al final del bloque de código
//imprimiendo los números del 1 al 10   
let k = 1;
do {
    console.log(k);
    k++;
} while(k <= 10);

//funciones/métodos
function utilizarDoWhile(){
    //ciclo do while-> la primera iteración se ejecuta sin evaluar la condición, luego se evalúa la condición para las siguientes iteraciones
let k = 1;
do {
    console.log(k);
    k++;
} while(k <= 10);

}
utilizarDoWhile();
console.log("------------------");
//funciones con parametros
function utilizarwhile(contador){
while(contador<=10){
    //condicion
console.log(contador);
contador++;
}
}
utilizarwhile(5);// pasando argumentos

console.log("------------------");
utilizarwhile(1);
