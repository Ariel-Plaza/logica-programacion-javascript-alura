//1.- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
console.log("--- Ejercicio 1 ---")

function calculoImc(peso, altura) {
  // resultado = peso / (altura * altura);
  return peso / (altura * altura);
}
resultado = calculoImc(78, 1.75)
console.log(resultado)


//2.- Crea una función que calcule el valor del factorial de un número pasado como parámetro.
console.log("--- Ejercicio 2 ---")

function factorialNumero(numero) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++){
    resultado *= i;
  }
  return resultado;
}

let factorial = factorialNumero(5)
console.log(factorial);

//3.- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

console.log("--- Ejercicio 3 ---")

function convertirDolaresReales(cantidad) {
  let reales = 4.80;
  return cantidad * reales;
}

let conversionReales = convertirDolaresReales(2);
console.log(conversionReales);

//4.- Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
console.log("--- Ejercicio 4 ---");

function area(alto, ancho) {
  return alto * ancho;
}

function perimetro(alto, ancho) {
  return (2 * alto) + (2 * ancho)
}

let areaRectangulo = area(10,5) 
let perimetroRectangulo = perimetro(10, 5);

console.log(`El area de un rectangulo es ${areaRectangulo} y el perimetro es ${perimetroRectangulo}`)


//5.- Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

console.log("--- Ejercicio 5 ---");

let Pi = 3.14;
function areaCirculo(radio) {
  return Pi * radio*radio;
}

function perimetroCirculo(radio) {
  return 2 * Pi * radio;
}

let areadelcirculo = areaCirculo(5)
let perimetrodelcirculo = perimetroCirculo(5)

console.log(`El area del circulo es ${areadelcirculo} y el perimetro del circulo es ${perimetrodelcirculo}`)

//6.- Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

console.log("--- Ejercicio 6 ---");

function tablaMultiplicar(numero) {
  let resultado = 0;
  for (let i = 1; i <= 10; i++){
    resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`)
  }
  return;
}

let tabla = tablaMultiplicar(5)
console.log(tabla);