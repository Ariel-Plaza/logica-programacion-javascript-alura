/* Has sido contratado(a) para desarrollar una calculadora que calcula el promedio y así verificar la situación de aprobación de un estudiante en función de sus cuatro notas. El promedio requerido para aprobar es de mínimo 5. Tu tarea es implementar dos funciones en JavaScript:

calcularPromedio(nota1, nota2, nota3, nota4) => Esta función recibe las cuatro notas del estudiante como parámetros y devuelve el promedio calculado con base en esas notas.
verificarAprobacion(promedio) => Esta función recibe el promedio del estudiante como parámetro y devuelve "Aprobado" si el promedio es mayor o igual a 5, en caso contrario, devuelve "Reprobado".
Utiliza estos valores para las calificaciones:

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
*/

function calcularPromedio(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4)/4
}

function verificarAprobacion(promedio) {
  if (promedio >= 5) {
    console.log("Aprobado")
  } else {
    console.log("Reprobado")  
  }
}

//Optimizado con operador ternario
function verificarAprobacion(promedio){
         return promedio >= 5 ? "Aprobado" : "Reprobado";
}

let promedio = calcularPromedio(4, 2, 5, 6);

verificarAprobacion(promedio);