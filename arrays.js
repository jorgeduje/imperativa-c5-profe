// ANCHOR ---> Array - Arreglo - Coleccion 

// let numeroUno = 15
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26
// let numeroDos = 26

let numerosDeLaSuerte = [3, 26, 32, 15, 65, 1] // elementos

// console.log( numerosDeLaSuerte[0] )
// console.log( numerosDeLaSuerte[longitud - 1] )

let nombre = "juan cruz"

console.log( nombre[2] )

//  nombre = nombre.toUpperCase()
//  console.log(nombre)

 console.log( nombre.includes("z") )
 console.log( nombre.indexOf("y") )


// let palabras = ["casa", "avion", "pera", "manzana"]


// palabras[4] = "banana"
// palabras.push( "banana", 12, true, "peras")

// palabras.pop()

// console.log(palabras)



let numeritos = [ 14, 54, 12, 28 ] 

let arrayInvertido = [] // [28, 12, 54, 14]

arrayInvertido.push(  numeritos.pop() )
arrayInvertido.push(  numeritos.pop() )
arrayInvertido.push(  numeritos.pop() )
arrayInvertido.push(  numeritos.pop() )

console.log(arrayInvertido)

let palabras = ["casa", "avion", "pera", "manzana", true, {}, {}]
console.log(palabras.length )


const mostrarElementos = ()=>{

    for( let i = 0; i < palabras.length ; i++ ){   
      console.log( palabras[i])
    }

}

mostrarElementos()


let notasPepito = [ 5, 7, 9] 
let notasMaria= [ 8, 9, 10 ] 

const promediar = ( arreglo )=>{

    let acumulador = 0 // 21

    for( let i = 0; i < arreglo.length; i++ ){
        acumulador += arreglo[i]
    }

   let resultado = acumulador / arreglo.length 
    return resultado
}

let promedioPepito = promediar(notasPepito)
console.log(promedioPepito)

let promedioMaria = promediar(notasMaria)
console.log(promedioMaria)