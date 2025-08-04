/*
El siguiente código en JavaScript calcula el doble y el triple de un número proporcionado. Tu tarea consiste en seleccionar las opciones que sigan las mejores prácticas de programación y ayuden a mejorar la legibilidad y mantenibilidad del código.
*/
function calcularDobleTriple(numero) {
  const doble = numero * 2;
  const triple = numero * 3;

  return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
}

const numero = 5;
const resultado = calcularDobleTriple(numero);
console.log(resultado);

//*********** */

function calcularDoble(numero) {
  return numero * 2;
}

function calcularTriple(numero) {
  return numero * 3;
}

const numero = 5;
const doble = calcularDoble(numero);
const triple = calcularTriple(numero);

console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);