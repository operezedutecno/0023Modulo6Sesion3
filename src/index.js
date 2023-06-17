const { validate, format } = require("rut.js")
const moment = require("moment")

/*
const fechas = {
    creacion: moment().subtract(2, 'days').format("YYYY-MM-DD HH:mm:ss"),
    actualizacion: moment().format("YYYY-MM-DD HH:mm:ss")
}

console.log(fechas);
*/

/*
let persona1 = {
    rut: "19255285-1",
    nombre: "Osman",
    apellido: "Pérez",
    fecha_nacimiento: "1989-07-29",
    creacion: "2023-06-01"
}

let persona2 = {
    rut: "11.111111-1",
    nombre: "María",
    apellido: "Rodríguez",
    fecha_nacimiento: "1995-08-01"
}

let persona3 = {
    rut: "22.222.2222",
    nombre: "Juan",
    apellido: "López",
    fecha_nacimiento: "1975-06-05"
}

let persona4 = {
    rut: "1-9",
    nombre: "Adriana",
    apellido: "González",
    fecha_nacimiento: "1980-01-14"
}


var personas = []

personas.push(persona1, persona2, persona3, persona4)
*/
// console.log(personas);

/*
const incluirFechas = () => {
    for (let index = 0; index < personas.length; index++) {
        personas[index] = {...fechas, ...personas[index] };
    }
}
incluirFechas()
console.log(personas);

const listadoPersonas = (listado) => {
    for (const itemPersona of listado) {
        const { rut, nombre, apellido } = itemPersona
        const mensaje = validate(rut) ? 'Si' : 'No'
        console.log(`${format(rut)} | ${nombre} | ${apellido} | Válido: ${mensaje}`);
    }

    // Opción2
    // for (const { rut, nombre, apellido } of listado) {
    //     console.log(`${format(rut)} | ${nombre} | ${apellido} | Válido: ${validate(rut)}`);
    // }
}
listadoPersonas(personas)
*/

/* 
- instalar dependencias. npm install
- Levantar el proyecto npx nodemon
- Desarrollar una función que reciba cómo parámetro una fecha, validar que la fecha es del futuro si no es del futuro mostrar
  un mensaje que indique que la fecha es inválida. En caso de ser una fecha del futuro mostrar un listado de las personas e
  indicar la edad que tendrán para esa fecha.
*/

//English version

// Define objects with properties
let person1 = {
    rut: "19255285-1",
    nombre: "Osman",
    apellido: "Pérez",
    fecha_nacimiento: "1989-07-29",
    creacion: "2023-06-01"
}

let person2 = {
    rut: "11.111111-1",
    nombre: "María",
    apellido: "Rodríguez",
    fecha_nacimiento: "1995-08-01"
}

let person3 = {
    rut: "22.222.2222",
    nombre: "Juan",
    apellido: "López",
    fecha_nacimiento: "1975-06-05"
}

let person4 = {
    rut: "1-9",
    nombre: "Adriana",
    apellido: "González",
    fecha_nacimiento: "1980-01-14"
}

// Create an array to store people objects
var people = []

//Add person objects to the people array
people.push(person1, person2, person3, person4)

// Checks if a given date is in the future
function isFutureDate(date) {
    const currentDate = moment();
    return moment(date).isAfter(currentDate);
}

// Calculates ages of people based on a future date
function calculateAges(people, date) {
    if (!isFutureDate(date)) {
        console.log('Invalid date. It must be a future date.');
        return;
    }

    showFutureAge(people, date);
}

// Displays the future age of each person
function showFutureAge(people, date) {
    people.forEach(person => {
        const age = moment(date).diff(person.fecha_nacimiento, 'years');
        console.log(`${person.nombre} will be ${age} years old on the date ${reverseDate(date)}`);
    });
}

// Reverses the order of a given date string
function reverseDate(date) {
    var parts = date.split("-");
    var reversedDate = parts.reverse().join("-");
    return reversedDate;
}

const date = '2050-01-01';

calculateAges(people, date);


/* Ejercicio resuelto por el equipo
function esFechaDelFuturo(fecha) {
    const fechaActual = moment();
    return moment(fecha).isAfter(fechaActual);
}

function calcularEdades(personas, fecha) {
    if (!esFechaDelFuturo(fecha)) {
        console.log('La fecha es inválida. Debe ser una fecha del futuro.');
        return;
    }

    mostrarEdadFutura(personas)
}

function mostrarEdadFutura(personas) {
    personas.forEach(persona => {
        const edad = moment(fecha).diff(persona.fecha_nacimiento, 'years');
        console.log(`${persona.nombre} tendrá ${edad} años para la fecha ${invertirFecha(fecha)}`);
    });

}

function invertirFecha(fecha) {
    var partes = fecha.split("-");
    var fechaInvertida = partes.reverse().join("-");
    return fechaInvertida;
}

const fecha = '2030-01-01';

calcularEdades(personas, fecha);
*/