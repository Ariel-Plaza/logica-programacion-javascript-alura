let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// console.log(numeroSecreto);
//seleccion etiqueta desde DOM
let parrafo = document.querySelector('p');
//se envia texto desde js 

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//funcion
function verificarIntento() {
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
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}


function limpiarCaja() {
  //  let valorCaja =  document.getElementById('#valorUsuario')
  //   valorCaja.innerHTML = ""
  document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
  } else {
    //Si el numero generado esta incluido en lq lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function reiniciarJuego(params) {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de inicio
  condicionesIniciales();
  //generar numero aleatorio
  //deshabilitar el boton de nuevo Juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  //Inicializar el numero de intentos
}

//funcion generica
condicionesIniciales();