/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9

Output: El 15 es el número más grande
*/
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));

if (numero1 >= numero2 && numero1 >= numero3) {
  document.writeln("El " + numero1 + "\nes el número mayor");
}
if (numero2 >= numero1 && numero2 >= numero3) {
  document.writeln("El " + numero2 + "\nes el número mayor");
}
if (numero3 >= numero1 && numero3 >= numero2) {
  document.writeln("El " + numero3 + "\nes el número mayor");
}
