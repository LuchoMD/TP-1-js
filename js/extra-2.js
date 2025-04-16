/*
2- Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y determinar si es mayor de edad (18 años o más).
*/
let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
  document.writeln("Eres mayor de edad.")
} else {
  document.writeln("Eres menor de edad.")
}