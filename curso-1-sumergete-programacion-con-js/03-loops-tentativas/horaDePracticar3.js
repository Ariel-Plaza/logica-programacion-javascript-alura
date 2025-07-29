const prompt = require('prompt-sync')();

//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
contador = 1;
while (contador < 11 ) {
  console.log(contador);
  contador++;
}


//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
console.log("--- Ejercicio2 ---")

contador2 = 10;
while (contador2 > 0) {
  console.log(contador2);
  contador2--;
}

//3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
console.log("--- Ejercicio3 ---");

let numero1 = prompt("Ingrese un numero para iniciar la cuenta regresiva: ");
//5
contador3 = numero1;
while (contador3 >= 0) {
  console.log(contador3);
  contador3--;
}


//4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
console.log("--- Ejercicio4 ---");

let numero2 = prompt("Ingrese un numero para iniciar la cuenta progresiva: ");//4
contador4 = 0;
while (contador4 <= numero2) {
  console.log(contador4);
  contador4++;
}