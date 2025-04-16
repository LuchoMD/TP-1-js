/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/
let numero = parseInt(prompt("Ingrese un número"));
if (numero % 2 == 0) {
  document.writeln("El " + numero + "\nsi es divisible por 2");
}
if (numero % 2 !== 0) {
  document.writeln("El " + numero + "\nno es divisible por 2");
}