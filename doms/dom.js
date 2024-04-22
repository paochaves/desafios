"use strict";
/* const $nombre = document.getElementById("nombre");
const $email = document.getElementById("email");
const $mensaje = document.getElementById("mensaje");
const $botonEnviar = document.getElementById("botonenviar");

$botonEnviar.addEvenlistener("click", (evento) => {
  evento.preventDefault();
  console.log("hizo click en el boton del formulario");
});

let nombre = null;
let email = null;
let mensaje = null;

$nombre.addEventListener("input", (evento) => {
  nombre = evento.target.value;
});
$nombre.addEventListener("input", (evento) => {
  email = evento.target.value;
});
$nombre.addEventListener("input", (evento) => {
  mensaje = evento.target.value;
});
$nombre.addEventListener("input", (evento) => {
  nombre = evento.target.value;
});

$botonEnviar.addEvenlistener("click", (evento) => {
  evento.preventDefault();
  console.log(nombre);
  console.log(email);
  console.log(mensaje);
}); */

const d = document;
const $root = d.getElementById("root");
const $h1 = d.createElement("h1");
const $p = d.createElement("p");
const $btn = d.createElement("button");
const $btn1 = d.createElement("button");
const $btn2 = d.createElement("button");

let contadorDeCliks = 0;

$h1.textContent = "Manipulacion del DOM";
$p.textContent = contadorDeCliks;
$btn1.textContent = "+";
$btn2.textContent = "-";

$root.appendChild($h1);
$root.appendChild($p);
$root.appendChild($btn1);
$root.appendChild($btn2);
$root.style.backgroundColor = "green";
$root.style.color = "white";
$root.style.padding = "20px";

$btn.addEventListener("click", () => {
  contadorDeCliks++;
  $p.textContent = contadorDeCliks;
});

$btn1.addEventListener("click", () => {
  contadorDeCliks++;

  $p.textContent = contadorDeCliks;
});

$btn2.addEventListener("click", () => {
  contadorDeCliks--;

  $p.textContent = contadorDeCliks;
});
