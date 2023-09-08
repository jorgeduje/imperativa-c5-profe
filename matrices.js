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

// UNICAMENTE CUANDO LA MATRIZ ES CUADRADA ( mismas cantidad de filas que columnas )

let matrix = [
  ["pepe", 3, 5],
  [2, "carmen", 1],
  [7, 5, "maria"],
];

// matrix[0][0]
// matrix[1][1]
// matrix[2][2]

// TODO ---> Diagonal principal

const recorrerPrincipal = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    mat[i][i] = mat[i][i].toUpperCase();
  }
};

recorrerPrincipal(matrix);
console.table(matrix);

// TODO ---> Diagonal secundaria
let matrix2 = [
  [1, 3, 5],
  [2, 6, 1],
  [7, 5, 3],
];

// matrix2[0][2]
// matrix2[1][1]
// matrix2[2][0]

const recorrerSec = (mat) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][mat.length - (i + 1)] % 2 !== 0) {
      acc += mat[i][mat.length - (i + 1)];
    }
  }
  return acc;
};

// TODO ---> Matriz ---> doble for / for anidado

let matrix3 = [
  [1, 3, 5],
  [2, 6, 1],
  [7, 5, 3],
];

const recorrerMatriz = (mat) => {
  for (let fila = 0; fila < mat.length; fila++) {

    for (let col = 0; col < mat[fila].length; col++) {
      console.log("Estoy recorriendo la fila " + fila + " en su columna " + col )
      console.log(mat[fila][col])
    }

  }

  console.log("termine")
};

recorrerMatriz(matrix3)