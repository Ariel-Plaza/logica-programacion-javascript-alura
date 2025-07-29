/*Eres un desarrollador de software en una clínica médica llamada Médica Voll. La empresa desea que crees un pequeño juego de adivinanzas para sus pacientes mientras esperan en la sala de espera. Entonces, decides crear un juego del número secreto utilizando JavaScript, como se muestra a continuación:
*/

alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto);
}

// Dada esta estructura básica de código que creaste, ¿cómo modificarías el mensaje del alert para incluir el número que el paciente eligió en caso de no acertar el número secreto?

    alert("El número secreto era " + numeroSecreto + "pero elegiste " + intento);
