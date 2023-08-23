// ANCHOR ---> Objetos literales

let num = [12, 44, 22];

// let nombreUsuario = "pepe"
// let edadUsuario = 32
// let direccionUsuario = "italia 222"

// propiedades - metodos
// pares clave : valor

let usuario = {
  email: "pepe@gmail.com",
  nombre: "maria",
  edad: 22,
  iniciarSesion: function () {
    console.log("Inicio sesion");
  },
  cerrarSesion: function () {
    console.log("cerro sesion");
  },
};

// DOT NOTATION
console.log(usuario.nombre);

// BRACKET NOTATION
console.log(usuario["edad"]);

usuario.iniciarSesion();

// manipulacion de los objetos

// modificar
usuario.edad = usuario.edad + 1;

// agregar
usuario.apellido = "perez";

// borrar
delete usuario.email;

console.log(usuario);

// const estudiante = {
//   nombre: "juancito",
// };

// estudiante.nombre = "carmen";

// console.log(estudiante);

// TABLAS -- REGISTROS ---> sql
// COLECCIONES -- DOCUMENTOS ---> no sql

// productos

let funcionPromediar = function () {
  let acc = 0;

  for (let i = 0; i < this.notas.length; i++) {
    //    acc = acc + this.notas[i]
    acc += this.notas[i];
  }

  return acc / this.notas.length;
};

const estudiantes = [
  {
    nombre: "maria",
    notas: [6, 7, 9],
    promediar: funcionPromediar,
  },
  {
    nombre: "pepito",
    notas: [4, 5, 9],
    promediar: funcionPromediar,
  },
  {
    nombre: "carmen",
    notas: [7, 8, 9],
    promediar: funcionPromediar,
  },
];

const funcionParaProfesora = ()=>{

    for(let i = 0; i < estudiantes.length; i++){

        console.log(`El promedio ${estudiantes[i].nombre} es ${estudiantes[i].promediar()}`)

    }

}



funcionParaProfesora()

// juancito -- 4, 7, 10, promediar

funcionParaProfesora()

const funcionParaAgregarEstudiante = (nombre, notas)=>{
    estudiantes.push( {
        nombre: nombre ,
        notas: notas ,
        promediar: funcionPromediar
    } )
}

funcionParaAgregarEstudiante("yoselin", [5, 6, 10])
funcionParaAgregarEstudiante("carmelita", [9,9,10])
funcionParaAgregarEstudiante("martin", [10,9,10])

console.log("-------------------")
funcionParaProfesora()