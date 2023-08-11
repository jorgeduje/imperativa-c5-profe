// ANCHOR ---> Estructuras de control

// if - else

// superAdmin ---> acceso a todo
// admin ---> acceso a casi todo
// cliente ---> acceso a solo una parte

const determinarAcceso = (rolUsuario) => {
  let condicion = "";

  if (rolUsuario === "superAdmin") {
    // bloque
    condicion = "acceso a todo";
  } else if (rolUsuario === "admin") {
    // bloque
    condicion = "acceso a casi todo";
  } else if (rolUsuario === "cliente") {
    // bloque
    condicion = "acceso a una parte";
  } else {
    // bloque
    condicion = "no tenes acceso";
  }

  return condicion;
};

let resultadoAcceso = determinarAcceso("otra cosa");
console.log(resultadoAcceso);

// UNA FUNCION QUE DETERMINE SI SALGO CON PARAGUAS O NO
// si el clima esta lluvioso ---> Si, llevalo
// si no esta lluvioso ---> no, no hace falta

// ternario

const llevoParaguas = (clima) => {
  // if(clima === "lluvioso"){
  //     return "Si, llevalo"
  // }else{
  //     return "No, no hace falta"
  // }

  // condicion ? verdadero : falso

  return clima === "lluvioso" ? "Si, llevalo" : "No, no hace falta";
};

let resultado = llevoParaguas("lluvioso");
console.log(resultado);

// switch ---> case

// base el impuesto ---> 100
// vw ---> 10
// audi ---> 20
// volvo ---> 30
// renault --> 40
// bmw ---> 50
// tesla ---> 60
// por defecto si no es ninguna de estar marcas esta exento

const determinarImpuesto = (marcaDeAuto) => {
  let impuesto = 100;

  switch (marcaDeAuto) {
    case "vw":
    case "audi":
      impuesto += 10;
      break;
    case "volvo":
      impuesto += 30;
      break;
    default:
      impuesto = 0;
  }

  return impuesto > 0
    ? impuesto
    : `Su auto ${marcaDeAuto} esta exento y el total a pagar es ${impuesto}`;
};

let resultado2 = determinarImpuesto("cualquiercosa");
console.log(resultado2);
