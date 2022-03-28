"use strict";

// Edita el archivo script.js para crear una función que reciba una array de objetos (equipos y puntos conseguidos).
// La función devolverá un nuevo array con un nuevo objeto por cada elemento del array original.
// Ese nuevo objeto tendrá el nombre y el total de puntos del equipo correspondiente.

const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];



// Primero hago una copia del array.

const nuevoPuntuaciones = { ...puntuaciones};

console.log(nuevoPuntuaciones);

// Después sumo los puntos de cada equipo.

const reducer = (acc, current) => {
    return acc + current;
};

const puntos0 = nuevoPuntuaciones[0].puntos;
const totalPuntos0 = puntos0.reduce(reducer, 0);

const puntos1 = nuevoPuntuaciones[1].puntos;
const totalPuntos1 = puntos1.reduce(reducer, 0);

const puntos2 = nuevoPuntuaciones[2].puntos;
const totalPuntos2 = puntos2.reduce(reducer, 0);

const puntos3 = nuevoPuntuaciones[3].puntos;
const totalPuntos3 = puntos3.reduce(reducer, 0);

const puntos4 = nuevoPuntuaciones[4].puntos;
const totalPuntos4 = puntos4.reduce(reducer, 0);

const puntos5 = nuevoPuntuaciones[5].puntos;
const totalPuntos5 = puntos5.reduce(reducer, 0);

const puntos6 = nuevoPuntuaciones[6].puntos;
const totalPuntos6 = puntos6.reduce(reducer, 0);

const puntos7 = nuevoPuntuaciones[7].puntos;
const totalPuntos7 = puntos7.reduce(reducer, 0);

const puntos8 = nuevoPuntuaciones[8].puntos;
const totalPuntos8 = puntos8.reduce(reducer, 0);


// Creo el nuevo array.

const NuevoArrayPuntuaciones = [
    {
        equipo: nuevoPuntuaciones[0].equipo,
        totalPuntos : totalPuntos0,
    },
    {
        equipo: nuevoPuntuaciones[1].equipo,
        totalPuntos : totalPuntos1,
    },
    {
        equipo: nuevoPuntuaciones[2].equipo,
        totalPuntos : totalPuntos2,
    },
    {
        equipo: nuevoPuntuaciones[3].equipo,
        totalPuntos : totalPuntos3,
    },
    {
        equipo: nuevoPuntuaciones[4].equipo,
        totalPuntos : totalPuntos4,
    },
    {
        equipo: nuevoPuntuaciones[5].equipo,
        totalPuntos : totalPuntos5,
    },
    {
        equipo: nuevoPuntuaciones[6].equipo,
        totalPuntos : totalPuntos6,
    },
    {
        equipo: nuevoPuntuaciones[7].equipo,
        totalPuntos : totalPuntos7,
    },
    {
        equipo: nuevoPuntuaciones[8].equipo,
        totalPuntos : totalPuntos8,
    },
]

console.log(NuevoArrayPuntuaciones);


