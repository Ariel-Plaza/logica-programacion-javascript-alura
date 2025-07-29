/*
Luis es un apasionado de la tecnología y está dando sus primeros pasos en el mundo de la programación. Para practicar la lógica de programación, decidió desarrollar un sistema de inicio de sesión de usuario único en el que solo se necesita proporcionar la contraseña para ver el contenido del resto del proyecto.
Sin embargo, al probar su proyecto, se dio cuenta de que no importaba la contraseña que ingresara en el sistema, siempre se le permitía el acceso.

Sabiendo que tú también estás estudiando lógica de programación, Luis te pidió ayuda para que puedan encontrar el error juntos. Para ello, ha proporcionado el código que escribió:
*/

let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if ((contrasenia = contraseniaDelSistema)) {
  alert("Acceso al sistema garantizado");
}

//debe poner simbolo de igualdad ==, en  ves de asignacion =