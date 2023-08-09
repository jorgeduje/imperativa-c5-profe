// HOISTING


// ANCHOR ---> FUNCIONES
// FUNCIONES DECLARADAS VS EXPRESADAS

// console.log( "paso adelante")
// console.log( "paso al costado derecho")

// function f1 (){

//     console.log("paso adelante ")
//     console.log("paso adelante ")
//     console.log("paso adelante ")

// }


// f1()

// console.log( "salto")
// console.log( "prende el foco ")

// DECLARADAS ---> TIENEN NOMBRE
let saludoFinal = saludar( "perez")
function saludar ( nombre, apellido ){
   
    let saludo = `Hola ${nombre} ${apellido} como estas?`
    return saludo

}

function sumar ( n1, n2 ){

    return n1 + n2
}

console.log(saludoFinal)
// console.log( saludar( "perez") )

let numeroUno = 4 // lo sacaremos de lo que ingrese el usuario
let numeroDos = 3 // lo sacaremos de lo que ingrese el usuario


let res = sumar(numeroUno, numeroDos)





// let res2 = sumar(1, 7)
// console.log(res2)

// let res3 = sumar(8, 1)
// console.log(res3)

// EXPRESADAS ----> ANONIMAS ( 2 tipos , regular o de tipo flecha)
// let edad =2 

// let nombre = "pepe"

const restar =  function (a, b){
    return a - b
}

let resultadoResta = restar(10, 4)
console.log(resultadoResta)

// MULTIPLICAR ---> por 5
// ARROW FUNCTION



const multiplicarPorCinco =  (numero)=>{
   
let palabra = "casa"
  
    return numero * 5

}

let resultadoMulti = multiplicarPorCinco( 3 )
console.log(resultadoMulti)


// SCOPE ---> alcance o ambiente o lugar donde existe o donde vive  una variable 

// SCOPE ----> local 

// {
// x ---> no 
//     {
//         let x = 5
//         x ---> si

//         {
//             x ---> si


//         }

//         x ---> si
//     }
//     x ---> no
// }

// x ---> no


let palabra = "casa"

const pruebaScope = ()=>{
    let palabra = "avion"
   return palabra
}

pruebaScope()


// NECESITO UNA FUNCION QUE SIRVA PARA CONVERTIR PESOS A DOLARES 
// Y QUE LOS PESOS SEAN DINAMICOS Y QUE EL PRECIO DEL DOLAR TAMBIEN

const convertir = (cantidadPesos, precioDolar)=> cantidadPesos / precioDolar


let resultadoDolares = convertir(5000, 200)
console.log(resultadoDolares)