// ANCHOR VARIABLES ---> let y const

let edad = 25;
const apellido = "perez";

console.log(edad);
console.log(apellido);

edad = edad + 1;

console.log(edad);

// LINK ESTO NO SE PUEDE POR QUE ES UNA CONSTANTE
// apellido = "otra cosa"
// console.log(apellido)

// ANCHOR ---> TIPOS DE DATOS ---> primitivos

// STRING ---> cadena de texto
let nombre = "pepe"

// NUMBER ---> numeros
let numeroDeLaSuerte = 22

// BOOLEAN ---> true - false
let isLogged = true

// UNDEFINED 
let nombreDeUsuario = undefined

console.log(nombreDeUsuario)


// NULL
let datos = null

// NaN --> not a number

let x = 1
let y = "pepe"

let z = x * y

console.log(z)

// ANCHOR ---> OPERADORES

// LINK ---> matematicos

let n1 = 13
let n2 = 6

console.log( n1 + n2)
console.log( n1 - n2)
console.log( n1 * n2)
console.log( n1 / n2)
// MODULO %
console.log( n1 % n2 )

// CONCATENAR ---> JUNTAR 


let saludo = "hola" + " " + nombre + " " + "como estas?"

console.log(saludo)

// TEMPLATE LITERALS ---> BACKSTICKS
let saludoBien = `hola ${nombre} como estas?` 
console.log(saludoBien)


// LINK ---> comparacion ---> SIEMPRE DEVUELVE UN BOOLEANO

let numeroUno = 5 
let numeroDos = "5"
// console.log( numeroUno == numeroDos) // ---> simple
// console.log( numeroUno != numeroDos) // ---> simple

console.log( numeroUno === numeroDos) // ---> estricta
console.log( numeroUno !== numeroDos) // ---> estricta
// console.log( numeroUno > numeroDos)
// console.log( numeroUno < numeroDos)
// console.log( numeroUno >= numeroDos)
// console.log( numeroUno <= numeroDos)

console.log("------------")
// LINK ---> logicos
// FALSY´s ---> 0 --- "" --- undefined --- null
// TRUTHY´s ---> 1 --- "mama"

// AND ---> &&

let estaLogueado = false
let esAdmin = false

// SE QUEDA CON EL ULTIMO TRUTHY SI SON TODOS TRUTHY
// SE QUEDA CON EL PRIMER FALSY
let tienePermiso =  estaLogueado === true && 0 && undefined && esAdmin === true && "mama" && 1
console.log(tienePermiso)

// OR ---> ||
let tienePermisoDos = false || false  || 0 || "mama" ||  ""
console.log(tienePermisoDos)


// NOT ---> !

let f = false 
console.log( !f )


