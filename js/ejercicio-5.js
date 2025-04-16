/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/
let numero1 = parseInt(prompt("Ingrese el primer número", numero1));
let numero2 = parseInt(prompt("Ingrese el segundo número", numero2));
document.writeln("La suma es: " + (numero1 + numero2));