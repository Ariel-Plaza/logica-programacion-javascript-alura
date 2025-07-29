/*Eres un desarrollador de software que trabaja con JavaScript y necesitas crear una función que verifique si un número es positivo, negativo o cero. Tu tarea es implementar una función que reciba como parámetro un número entero y muestre un mensaje en la consola según las siguientes reglas:

Si el número es mayor que cero, el mensaje debe ser: "El número es positivo."
Si el número es menor que cero, el mensaje debe ser: "El número es negativo."
Si el número es igual a cero, el mensaje debe ser: "El número es cero."
Puedes utilizar la estructura de control if-else para verificar las condiciones y mostrar el mensaje correspondiente en la consola.
*/

function verificarNumero(numero) {
  if (numero > 0) {
    console.log("El número es positivo.");
  } else if (numero < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es cero.");
  }
}