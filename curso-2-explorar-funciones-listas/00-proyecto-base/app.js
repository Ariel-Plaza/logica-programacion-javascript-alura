let numeroSecreto = 0;
let intentos = 0;

// console.log(numeroSecreto);
//seleccion etiqueta desde DOM
let parrafo = document.querySelector('p');
//se envia texto desde js 

function asignarTextoElemento(elemento,texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//funcion
function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(numeroSecreto);
  // console.log(numeroDeUsuario);
  // console.log(numeroDeUsuario == numeroSecreto);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1 ? 'vez' : 'veces')}`);
    document.getElementById('reiniciar').removeAttribute("disabled")
  } else {
    if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento('p', 'El numero es menor.');
    } else {
    asignarTextoElemento('p', 'El numero es mayor.');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto')
  asignarTextoElemento('p', 'Indica un numero del 1 al 10')
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}


function limpiarCaja() {
//  let valorCaja =  document.getElementById('#valorUsuario')
//   valorCaja.innerHTML = ""
  document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function reiniciarJuego(params) {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de inicio
  condicionesIniciales();
  //generar numero aleatorio
  //deshabilitar el boton de nuevo Juego
  document.querySelector('#reinicia').setAttribute('disabled', 'true');
  //Inicializar el numero de intentos
}

//funcion generica
condicionesIniciales();