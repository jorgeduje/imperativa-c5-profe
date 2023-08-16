// ANCHOR ---> Estructuras de repeticion


let numero = 4
numero = numero + 4
numero += 8

numero++

// for
// inicializacion ; condicion ; modificador

// CONTAR LOS NUMEROS DESDE Y hasta x numero pero de z en z

const contarHasta = ( y, x, z )=>{

    for(let i = y ; i <= x ; i+=z){
        console.log(i)
    }

}

contarHasta( 3, 32, 5 )
console.log("---------------------------")
// desde el 0 al 16 
const contarImpares = ()=>{

    let acumulador = 0

    for( let i = 0; i < 5; i++  ){
        
       if( i % 2 !== 0  ){
        acumulador++
        console.log(`${i} es un numero impar`)
       }

    }

    return acumulador

}

let resultado = contarImpares()
console.log(resultado)


// while
console.log("-------------------")
console.log("while")
const mostrarNumeros = ()=>{

    let i = 20
    while(i < 20){
        console.log("por lo menos una vezwhile")


        i++
    }

}
mostrarNumeros()


// do while
console.log("do while")

const mostrarNumeros2 = ()=>{

    let i = 20
    do{
        console.log("por lo menos una vez do while")

        i++
    }while(i < 20)

}
mostrarNumeros2()

// `${} dasd ${}`
//  numero + "dsad " + numero2



