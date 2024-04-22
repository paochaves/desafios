// Este es un comentario de JavaScript de una sola línea

/*
Este es un
comentario de JavaScript
en varia líneas o en bloque
*/

/* Métodos de interacción */
// Entrada
/* let entrada = prompt();
entrada = prompt('Instrucciones');
console.log(entrada); */
/* let entrada = confirm('Instrucciones');
console.log(entrada); */

// Salida
/* console.log("mensaje en consola")
document.write("mensaje en interfaz de usuario")
alert("mensaje en ventana emergente") */

/* VARIABLES */
// Declaración
/* var saludo1;
let saludo2;
console.log(saludo1);
console.log(saludo2); */

// Declaración e inicialización
/* saludo1 = 'hola1';
var saludo2 = 'hola2';
let saludo3 = 'hola3';
const saludo4 = 'hola4';
console.log(saludo1);
console.log(saludo2);
console.log(saludo3);
console.log(saludo4); */

// Ámbito de las variables
/* let variableGlobal = 'soy variable global';
console.log(variableGlobal);
{
  let variableLocal = 'soy variable local';
  console.log(variableLocal);
} */

/* let cambiaValor = 1;
const noCambiaValor = 2;
cambiaValor = '1';
noCambiaValor = 2;
console.log(cambiaValor);
console.log(noCambiaValor); */

/* Modo estricto */
"use strict";
/* saludo = 'hola';
console.log(saludo); */

/* Tipos de dato primitivos */
// string
let miVariable = "";
miVariable = "a";
miVariable = "abc";
miVariable = "este es un texto de 'ejemplo 1'";
miVariable = 'este es un texto de "ejemplo 2"';
miVariable = `este es un 'texto' de "ejemplo" 3`;
// number
miVariable = 10;
miVariable = 9.5;
miVariable = 0xff;
miVariable = 123e5;
miVariable = NaN;
/* console.log(miVariable);
console.log(typeof miVariable); */
// boolean
miVariable = true;
miVariable = false;
// undefined
let miVariableSinAsignacion;
//console.log(miVariableSinAsignacion);
// null
miVariable = null;
// console.log(miVariable);

/* Operador typeof */
let entradaUsuario = "123";
/* console.log(entradaUsuario);
console.log(typeof entradaUsuario); */
entradaUsuario = 123;
/* console.log(entradaUsuario);
console.log(typeof entradaUsuario); */

/* const miString = 'hola';
console.log(miString);
console.log(miString[0]);
console.log(miString[1]);
console.log(miString[2]);
console.log(miString[3]); */

/* Conversión de tipos */
/* let numero1 = '1';
let numero2 = '2';
let numero3 = '3';
let resultado = numero1 + numero2 + numero3;
console.log(resultado);
numero1 = Number(numero1);
numero2 = parseInt(numero2);
numero3 = +numero3;
resultado = numero1 + numero2 + numero3;
console.log(resultado); */

/* let numeroDecimal1 = '1.5';
let numeroDecimal2 = '2.5';
let numeroDecimal3 = '3.5';
let resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado);
numeroDecimal1 = parseFloat(numeroDecimal1);
numeroDecimal2 = parseFloat(numeroDecimal2);
numeroDecimal3 = Number(numeroDecimal3);
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado); */

/* let telefono = 555;
let codigoPais = 57;
console.log(telefono);
console.log(typeof telefono);
console.log(codigoPais);
console.log(typeof codigoPais);
telefono = String(telefono);
console.log(telefono);
console.log(typeof telefono);
codigoPais = codigoPais.toString();
console.log(codigoPais);
console.log(typeof codigoPais);
console.log('Número completo:', codigoPais + telefono); */

/* Expresiones booleanas */
// Truthy o verdaderos
/* console.log(true);
console.log(1);
console.log(-1);
console.log('a');
console.log('abc'); */

// Falsy o falsos
/* console.log(false);
console.log(0);
console.log('');
console.log(undefined);
console.log(null); */

/* Control de flujo */
// Condicionales
/* if (true) {
  console.log('se cumple la condición 1');
} */

/* if (false) {
  console.log('se cumple la condición 2');
} else {
  console.log('no se cumple la condición 2');
} */

/* if (false) {
  console.log('se cumple la condición 3 a');
} else if (true) {
  console.log('se cumple la condición 3 b');
} else {
  console.log('no se cumple la condición 3');
} */

/* if (false) {
  console.log('se cumple la condición 4');
}
if (true) {
  console.log('se cumple la condición 5');
} */

/* const perfil = 'profesor';
switch (perfil) {
  case 'estudiante':
    console.log('eres un estudiante');
    break;
  case 'profesor':
    console.log('eres un profesor');
    break;
  default:
    console.log('perfil no permitido');
    break;
} */

// Ciclos
// contador, centinela

/* for (let i = 0; i < 3; i++) {
  console.log('FOR ejecutando contenido del bloque');
} */

/* let i = 0;
while (i < 3) {
  console.log('WHILE ejecutando contenido del bloque');
  i++;
} */

/* let centinela = true;
while (centinela === true) {
  console.log('WHILE ejecutando contenido del bloque');
  centinela = false;
} */

/* let centinela = false;
while (centinela === true) {
  console.log('WHILE ejecutando contenido del bloque');
} */

/* do {
  console.log('DO WHILE ejecutando contenido del bloque');
} while (centinela === true); */

/* Operadores */
// Concatenación
//console.log('Pepita' + ' ' + 'Pérez');
// Aritméticos
/* console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
console.log(8 % 4);
console.log(10 % 3);
console.log(2 ** 3); */
// Precedencia de operadores - PEMDAS
/* const operacion = 12 / 3 + 2 * 3 - 1;
console.log(operacion); */

/* miVariable = 3;
console.log(miVariable); */
// Incremento
/* miVariable++;
console.log(miVariable); */
// Decremento
/* miVariable--;
console.log(miVariable); */

// Asignación =
/* let numero1 = 8;
let numero2 = 4;
let resultado = numero1 + numero2;
resultado += 3;
resultado -= 5;
resultado *= 2;
resultado /= 2;
resultado %= 3;
resultado **= 2;
console.log(resultado); */

// Comparación
/* console.log(8 == 4);
console.log(8 === 4);
console.log(8 == 8);
console.log(8 === 8);
console.log(8 == '8');
console.log(8 === '8');
console.log('8' === '8');
console.log('pepita' == 'Pepita');
console.log('pepita' === 'Pepita');
console.log(8 != 4);
console.log(8 != '8');
console.log(8 !== '8');
console.log(8 > 4);
console.log(8 < 4);
console.log(8 >= 4);
console.log(8 <= 4);
console.log(8 >= 8); */

// Lógicos
/* console.log(true && true && true);
console.log(true && false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true || false);
console.log(false || false);
console.log(!true);
console.log(!false); */

/* Tipos de dato no primitivos */
// Arreglos
/* const miArreglo = ['pepita', 'mafe', 'jhon'];
console.log(miArreglo);
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
miArreglo[0] = 'deisy';
console.log(miArreglo); */
/* const miArreglo = [];
console.log(miArreglo instanceof Array); */
/* const miArreglo = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
console.log(miArreglo);
console.log(miArreglo.length); */

// Objetos
/* const objeto = {
  llave: 'valor',
  propiedad: 'valor de la propiedad',
  metodo: () => {
    console.log('hola, soy un método');
  },
};
console.log(objeto);
console.log(objeto['propiedad']);
console.log(objeto.propiedad);
console.log(objeto.metodo()); */
/* const estudiante = {
  id: '0x00',
  nombre: 'Pepita',
  apellido: 'Pérez',
  saludar: function () {
    alert('Hola, soy ' + this.nombre + ' ' + this.apellido);
  },
};
console.log(estudiante);
console.log(estudiante['apellido']);
console.log(estudiante.nombre);
console.log(estudiante.saludar()); */

// this
//console.log(this);

// FUNCIONES
/* const funcionFlecha = () => {
  console.log('Hola, foy una función flecha');
};
funcionFlecha();

function funcionRegular() {
  console.log('Hola, soy una función regular');
}
funcionRegular(); */

/* function miFuncion(a) {
  console.log('el valor de a es: ' + a);
}
miFuncion('A'); */

/* function miFuncion() {
  console.log('Hola desde mi función');
}
const retornado = miFuncion();
console.log(retornado); */

/* function miFuncion() {
  return 'Hola desde mi función';
}
const retornado = miFuncion();
console.log(retornado); */

// function miFuncion(){
//     return "Hola desde mi funcion"
// }
// constretornado = miFuncion();
// console.log(retornado);
function miFuncion(nombre) {
  console.log("Hola, " + nombre);
}
miFuncion();
miFuncion("pepita perez");
