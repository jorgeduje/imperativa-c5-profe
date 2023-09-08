let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const totalPorSemana = (mat, numSemana) => {
  let fila = numSemana - 1;
  let acc = 0;
  for (let i = 0; i < mat[fila].length; i++) {
    acc += mat[fila][i];
  }
  return acc;
};

let totalSemana3 = totalPorSemana(gastos, 3);
console.log(totalSemana3);

// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?

let gastos2 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

const diaMayorGasto = (mat) => {
  let mayor = mat[0][0];
  let semana = 0;
  let dia = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mayor < mat[i][j]) {
        mayor = mat[i][j];
        semana = i;
        dia = j;
      }
    }
  }
  return { monto: mayor, semana: semana + 1, dia: dia  };
};

let mayorGasto = diaMayorGasto(gastos2);
console.log(mayorGasto);
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

console.log(
  `el dia que mas se gasto fue de ${mayorGasto.monto} que fue el dia ${dias[mayorGasto.dia]} de la semana ${mayorGasto.semana}`
);



//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

//TODO
// CALCULAR EL TOTAL GASTADO DEL MES
