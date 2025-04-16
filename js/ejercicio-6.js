/*
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3

Output: El 15 es el número más grande
*/
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
if (numero1 > numero2) {
  document.writeln("El " + numero1 + "\nes el número mayor");
}
if (numero2 > numero1) {
  document.writeln("El " + numero2 + "\nes el número mayor");
}
if (numero1 == numero2) {
  document.writeln("Los dos números ingresados son iguales");
}