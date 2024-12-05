let nombre = prompt("¿Cuál es tu nombre? ");
let edad = parseInt(prompt("¿Cuál es tu edad? "));
let estudiante = prompt("¿Eres estudiante? (si/no) ").toLowerCase() === "si";

let mensaje = `Hola, ${nombre}.`;
mensaje += ` Tienes ${edad} años.`;

if (edad >= 18) {
 mensaje += " Eres mayor de edad.";
} else {
 mensaje += " Eres menor de edad.";
}
if (estudiante) {
 mensaje += " Tienes derecho a un descuento por ser estudiante.";
}
console.log(mensaje);
