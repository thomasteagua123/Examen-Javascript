// 1. ¿Cuál es la diferencia entre let, const y var al declarar una variable en JavaScript?
//rta: La diferencia es que, let se usa en un código viejo y que persista dentro del código. Declarar variables con let ya no es muy vista en estos años.
// El const se utiliza para declarar variables constantes, o sea que no se pueda reasignar su valor.
// El var se usa al contrario del const, ya que su valor puede ser reasignado.
// 2. ¿Qué diferencias hay entre un objeto y un arreglo en JavaScript? ¿Cuándo conviene usar uno u otro?
// La diferencia es que, en un objeto, tiene un indice que indica el nombre, y por otro lado tiene el tipo de valor que tiene ese indice(int, str, float, bool, etc).
// Un array es una lista que contiene valores, por ejemplo una lista de compras, lista de quehaceres, etc.
// Usar cuando tengas que nombrar diferentes cosas, por ejemplo nombres de personas, su edad, su altura, el color de pelo, etc.
// Usar un array cuando tengas que poner una lista de cosas, por ejemplo: Lista de compras, lista de componentes, etc.
// 3. ¿Qué devuelve el método .filter() y cómo se diferencia de .map() al aplicarse sobre un array?
//El filter devuelve algo en especifico a través de una condición,
// y el map recorre la lista y cambia los valores.
// 4. ¿Qué método de arrays se utiliza para agregar un elemento al principio de un arreglo(array)?
//Se utiliza el metodo .unshift, se utiliza de modo: arreglo.unshift(elemento) el elemento puede ser igual a un int, str, float, bool, etc

// Ejercicio 1
const alumnos = [
  { nombre: "Ana", edad: 20, nota: 8 },
  { nombre: "Luis", edad: 17, nota: 5 },
  { nombre: "Carla", edad: 22, nota: 9 },
];
// Recorré el arreglo e imprimí en consola el nombre del alumno
// y si está aprobado o desaprobado (nota mayor o igual a 6).
alumnos.forEach((alumnos) => {
  if (alumnos.nota >= 6) {
    console.log(alumnos.nombre, "aprobó");
  } else {
    console.log(alumnos.nombre, "desaprobo");
  }
});

function obtenerPromedio(alumnos) {
  let suma = 0;
  let i = 0;
  alumnos.forEach((alumno) => {
    i++;
    suma += alumno.nota;
  });
  return suma / i;
}
console.log(obtenerPromedio(alumnos)); //Hecho por el profe :D

// Ejercicio 2

// Usando el mismo arreglo alumnos, usá .filter() para crear un nuevo arreglo
//que contenga solo a los alumnos mayores de edad.

const mayoresDeEdad = alumnos.filter((alumno) => alumno.edad >= 18);
console.log(mayoresDeEdad);

// Usá .map() para obtener un arreglo con los nombres de todos los alumnos en mayúsculas.
const nombresMayusculas = alumnos.map((alumno) => alumno.nombre.toUpperCase());
console.log(nombresMayusculas);

// Ejercicio 3
const contenedor = document.getElementById("lista");

const lista = document.createElement("ul");
alumnos.forEach((alumno) => {
  const item = document.createElement("li");
  item.textContent = alumno.nombre;
  lista.appendChild(item);
});

contenedor.appendChild(lista);
