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
if(numero === 0) {
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
/*let numero1 = prompt('Ingrese el primer numero');
let numero2 = prompt('Ingrese el segundo numero');
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
console.log (numero1 + " y " + numero2);
document.write(" El primer numero es: " + numero1 + " y el segundo numero es: " + numero2 + ",");
 if (isNaN(numero1)) { 
    document.write("El valor ingresado no es un numero");
} else if (isNaN(numero2)) { 
    document.write("El valor ingresado no es un numero"); 
} else if (numero1 < numero2) { 
    document.write(`el numero ${numero2} es mayor y el numero ${numero1} es el menor`);
} else if (numero1 > numero2) { 
    document.write(`el numero ${numero1} es mayor y el numero ${numero2} es el menor`); 
} else { 
    document.write("Los numeros son iguales"); }*/

/*for (let i = 0, i < 3; i++); {
        console.log('Ejecutando el contenido del bloque');
    }*/

/* DESAFIO 6- Hacer un programa que pida al usuario un numero entero y muestre los valores desde cero hasta el numero ingresado.*/
// Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.
/* const numero = parseInt(prompt('Ingrese un número entero'));
for (let i = 0; i <= numero; i++) {
  console.log('Valor en i: ', i);
  document.write(i);
} */

// Hacer un programa que pida al usuario un número entero y muestre los valores desde uno hasta el número ingresado.
/* const numero = parseInt(prompt('Ingrese un número entero'));
for (let i = 1; i <= numero; i++) {
  console.log('Valor en i: ', i);
  document.write(i);
} */

// Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.
/* let texto = prompt('Ingrese un texto');
while (texto === '') {
  texto = prompt('Ingrese un texto');
}
document.write('Ingresaste el texto: ' + texto); */

// Hacer un programa que le pregunte al usuario si desea continuar, en caso de SI repetir pregunta, en caso de NO salir.
/* let continuar = null;
do {
  continuar = confirm('¿Desea continuar?');
  if (!continuar) {
    document.write('El programa ha terminado.');
  }
} while (continuar); */

// Hacer un programa que muestre los días de la semana.
/* const miArreglo = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
for (let i = 0; i < miArreglo.length; i++) {
  document.write(miArreglo[i] + ' ');
} */

// Hacer un programa que itere sobre una cadena de texto
/* const miString = 'hola';
for (let i = 0; i < miString.length; i++) {
  document.write(miString[i]);
} */

// Hacer un programa que pida un número al usuario y muestre los números pares desde 1 hasta el número ingresado.

/* Hacer un programa que solicite al usuario un número de 0 a 6 (manejar errores) mostrar el día de la semana correspondiente según arreglo "días" */

// Hacer un programa que solicite al usuario un día de la semana y le retorne su nombre en inglés.
