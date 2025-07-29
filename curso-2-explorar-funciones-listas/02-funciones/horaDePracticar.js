//1.- Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWorld() {
  console.log("Hola, mundo")
};
helloWorld();

//2.- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludo(nombre) {
  console.log(`Hola ${nombre}!`)
}

saludo("ariel");

//3.- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function doblaNumero(numero) {
  const numeroDoble = numero * 2;
  return numeroDoble;
}

let numDoblado = doblaNumero(2);
console.log(numDoblado)

//4.- Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(primero, segundo, tercero) {
  const promedio = (primero + segundo + tercero) / 3
  return promedio;
}
let promedioNumeros = promedio(5, 5, 5)
console.log(promedioNumeros)
//5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(primerNumero,segundoNumero) {
  if (primerNumero > segundoNumero) {
    console.log(`El numero ${primerNumero} es mayor.`)
  } else {
    console.log(`El numero ${segundoNumero} es mayor.`)    
  }
}
numeroMayor(2, 10);

//6.- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplPorSiMismo(numero) {
  return numero * numero;
};

let muliplosimismo = multiplPorSiMismo(2);
console.log(muliplosimismo);