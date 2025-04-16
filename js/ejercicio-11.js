/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/
let numero = parseInt(prompt("Ingresa un número:"));
let divisibles = "";

if (numero % 2 === 0) {
  divisibles += "2";
}
if (numero % 3 === 0) {
  if (divisibles !== "") {
    divisibles += ", ";
  }
  divisibles += "3";
}
if (numero % 5 === 0) {
  if (divisibles !== "") {
    divisibles += ", ";
  }
  divisibles += "5";
}
if (numero % 7 === 0) {
  if (divisibles !== "") {
    divisibles += ", ";
  }
  divisibles += "7";
}

if (divisibles !== "") {
  document.writeln("El " + numero + " es divisible por " + divisibles);
} else {
  document.writeln("El " + numero + " no es divisible por 2, 3, 5 ni 7");
}