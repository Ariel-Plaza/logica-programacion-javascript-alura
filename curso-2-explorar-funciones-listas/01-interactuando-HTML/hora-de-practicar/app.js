//01
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

//02
function clicConsole() {
  console.log("El botón fue clicado")
};

//03

function clicPrompt() {
  let ciudad = prompt("Indica el nombre de una ciudad de Brasil: ")
  alert(`Estuve en ${ciudad} y me acordé de ti.`)
};

//04

function clicAlert() {
  alert("Yo amo JS")
};

//05

function clicSuma() {
  let a = parseInt(prompt("Ingrese el primer numero: "))
  let b = parseInt(prompt("Ingrese el segundo numero: "))
  alert(`El resultado de la suma es: ${a + b}`);
}