
let numeroMaximo = parseInt(prompt("Cual es el numero maximo que quieres adivinar? "));
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 3;

console.log(numeroSecreto)
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor: `));

  // Este codigo realiza la comparacion
  if (numeroUsuario == numeroSecreto) {
    //acertamos, la condicion fue verdadera
    alert(
      `Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    //Incrementa contador cuando no acierta
    // intentos = intentos + 1;
    // intentos += 1;
    intentos++;
    //cambio palabra de la variable
    palabraVeces = "veces";
    if (intentos > maximoIntentos) {
      alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
      break;
    }
    // la condicion no se cumple
    //    alert("Lo siento, no acertaste el numero")
  }
}