//Declarar variables
let mayorEdad = true;
let licen = false;
let nombre = "Carlo";
let edad = 20;

//Com logic
let puedeY = mayorEdad&&licen;
let puedeO = mayorEdad||licen;

//Concatenación
let mensa = "!Bienvenido campista "+nombre+"¡";
let mensaCom = `Hola ${nombre}, tienes ${edad} años y estás listo para el bootcamp`;

//Usando ambos operadores para responder a la pregunta
console.log("Puede conducir ?", puedeY);
console.log("Puede conducir? "), puedeO;
console.log(mensa);
console.log(mensaCom);
