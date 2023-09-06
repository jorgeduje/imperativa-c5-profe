// ANCHOR ---> Matrices --> array bidimensional

// let arr2 = [5, 6 ,7]

// arr2[2]

// console.log( mat[2][1] )

//ANCHOR --->  RECORRER

// TODO ---> Fila
// mat[1][0]
// mat[1][1]
// mat[1][2]

let mat = [
  [1, 2, 5], // fila 0
  [5, 1, 6], // fila 1
  [1, 3, 5, 7, 1], // fila 2
];
const recorrerFila = (matriz, numFila) => {
  for (let i = 0; i < matriz[numFila].length; i++) {
    matriz[numFila][i] = 0;
  }
};

recorrerFila(mat, 2);
console.table(mat);

// TODO ---> Columna
let mat2 = [
  [1, 2, 5], // fila 0
  [5], // fila 1
  [1, 3, 5], // fila 2
];

// mat2[0][2]
// mat2[1][2]
// mat2[2][2]
const recorrerCol = (matriz, numCol) => {
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i][numCol] !== undefined) {
      matriz[i][numCol] = "Cambio";
    }
  }
};

recorrerCol(mat2, 2);
console.table(mat2);

// TODO ---> Matriz ---> doble for / for anidado

// UNICAMENTE CUANDO LA MATRIZ ES CUADRADA ( mismas cantidad de filas que columnas )
// TODO ---> Diagonal principal

// TODO ---> Diagonal secundaria
