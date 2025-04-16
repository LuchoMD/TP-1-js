/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo
Output: oauo
*/
let frase = prompt("Ingresa una frase (máx 10 caracteres):");
let vocales = "";

if (frase.length > 0) {
  let c = frase.charAt(0).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 1) {
  let c = frase.charAt(1).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 2) {
  let c = frase.charAt(2).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 3) {
  let c = frase.charAt(3).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 4) {
  let c = frase.charAt(4).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 5) {
  let c = frase.charAt(5).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 6) {
  let c = frase.charAt(6).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 7) {
  let c = frase.charAt(7).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 8) {
  let c = frase.charAt(8).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
if (frase.length > 9) {
  let c = frase.charAt(9).toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vocales += c;
  }
}
document.write("Vocales encontradas: " + vocales);
