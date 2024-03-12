"Use strict";

//DESAFIO 1- saludar con nombre
/*const entrada = prompt("Ingrese su nombre");
console.log (entrada);
switch(entrada){
    case "":
        document.write("Hola!");
        break
     default:
    document.write("Hola "+ entrada);
    break;
}*/

//DESAFIO 2- pedir numero y sumarlos (SOLUCION MIA)
/*let numero1 = prompt("ingrese un numero");
console.log (numero1);
let numero2 = prompt("ingrese otro numero");
console.log (numero2);
numero1 =parseInt(numero1);
numero2 =parseInt(numero2);
resultado = numero1 + numero2;
console.log(resultado);*/

//DESAFIO 2- pedir numero y sumarlos (SOLUCION PROFE) hay que corregir
/*const numero1 = Number(prompt('Ingrese el primer numero'));
const numero2 = parseInt(prompt('Ingrese el segundo numero'));
console.log(numero1 + numero2);
document.write(numero1 + numero2);
document.write(`La suma de ${numero1} y ${numero2} es ${numero1} + ${numero2}`);
*/

//DESAFIO 3- pedir nombre y apellido y mostrarlo completo
/*const nombre = prompt("ingrese su nombre");
const apellido = prompt("ingrese su apellido");
console.log(nombre + ` ` + apellido);
document.write(`${nombre} ${apellido}`);
*/

/* DESAFIO 4- Hacer un programa que reciba del usuario un numero y muestre,
 si el numero ingresado es cero, de otra manera que muestre si es positivo o si es negativo*/

/*const numero = Number(prompt('Ingrese un numero'));
console .log(numero);
if(numero == 0) {
document.write("El numero ingresado es cero");
} else if (numero > 0) {
    document.write("El numero ingresado es positivo");   
    } else {
    document.write("El numero ingresado es negativo");
}
*/

/* DESAFIO 5- Hacer un programa que reciba del usuario dos numeros y muestre 
cual es el numero mayor y cual es el numero menor
*/
let numero1 = prompt('Ingrese el primer numero');
let numero2 = prompt('Ingrese el segundo numero');
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
console.log (numero1 + " y " + numero2);
document.write(" El primer numero es: " + numero1 + " y el segundo numero es: " + numero2 + ",");
if (numero1 > numero2) {
document.write (" El numero es " + numero1 + " es mayor y el numero " + numero2 + " en menor");
}
else {
document.write (" El numero " + numero2 + " es mayor y el numero " + numero1 + " es menor");
 }
