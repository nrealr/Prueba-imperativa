/* let frase = "hola mundo xd";

let otro = "otra frasesita";

let prueba = "otra prueba mas";

console.log(frase);

console.log(otro);
 */

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);
