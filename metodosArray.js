let numeros = [1, 5, 4];

numeros.push(12);

numeros.includes(5);

// CALLBACK ---> es una funcion que se pasa como argumento a otra funcion

// const sumar = (a, b)=>{

// }

// sumar( ()=>{} )

let libros = [
  {
    nombre: "historiasInconscientes",
    autor: "Gabriel Rolón",
    paginas: 352,
  },
  {
    nombre: "operacionMasacre",
    autor: "Rodolfo Walsh",
    paginas: 236,
  },
  {
    nombre: "elAlquimista",
    autor: "Paulo Coehlo",
    paginas: 192,
  },
  {
    nombre: "elCampamento",
    autor: "Blue Jeans",
    paginas: 480,
  },
];

// const filtrar = (arr)=>{

//     const newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].paginas > 300){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray

// }

// FILTER ---> condicion

let newArr = libros.filter((libro, indice) => libro.paginas > 300);
console.log(newArr);


// MAP ---> lo nuevo que quiero agregar
// siempre va a retornar un nuevo arreglo de la misma longitud 

// const recorrer = (arr)=>{

//         const newArray = []
//         for (let i = 0; i < arr.length; i++) {
//                 newArray.push( {nombre : arr[i].nombre } )
//         }
//         return newArray
    
//     }

let arr = libros.map( (elemento)=> {
    return {nombre: elemento.nombre}
} ) // []
console.log(arr)

// FIND ---> condicion 
// me devuelve el elemento que encuentra primero o undefined si no hay coincidencias

let elementoEncontrado = libros.find( (libro)=> libro.nombre === "mi libro"  )
console.log(elementoEncontrado)

// sort ---> no devuelve nada 
// modifica el array original

libros.sort( (a, b)=>  b.paginas - a.paginas  )
console.log(libros)



let numeros2 = [1, 5, 4];

numeros2.sort( (a, b)=> b - a )
console.log(numeros2)


// REDUCE ---> llevar un array a la minima expresion 


//   let numeritos = [15, 2 , 3]

//   let total = numeritos.reduce( (acc, elemento)=> {
//     return acc + elemento
//   }, 0 ) // 0

//   console.log(total)

let items = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 35,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];

  let total = items.reduce( (acc, elemento)=>{
    return acc + ( elemento.cantidad * elemento.precio )
  }, 0 ) // 
  console.log(total)

 