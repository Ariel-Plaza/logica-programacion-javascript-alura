//seleccion etiqueta desde DOM
let parrafo = document.querySelector('p');
//se envia texto desde js 
parrafo.innerHTML = "Indica un numero del 1 al 10"

function asignarTextoElemento(elemento,texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

//funcion
function intentoDeUsuario(){
  alert("click desde el boton ")
}

//funcion generica
asignarTextoElemento('h1','Juego del número secreto')