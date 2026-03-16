const PRIORIDAD_ALTA = 1;
const PRIORIDAD_MEDIA = 2;
const PRIORIDAD_BAJA = 3;

// Un array es una lista ordenada de elementos
// Se declara con corchetes []
const tareas = [
  {
    titulo: "Crear diseño de la TaskApp",
    prioridad: PRIORIDAD_BAJA,
    completada: false,
    fechaLimite: null,
    descripcion: null,
  },
  {
    titulo: "Empezar a programar la TaskApp",
    prioridad: PRIORIDAD_ALTA,
    completada: true,
    fechaLimite: "2026-03-10",
    descripcion: "Programar siguiendo buenas prácticas",
  },
];

function buscarTareas(tareas, prioridad) {
    return tareas.filter((tarea) => tarea.prioridad === prioridad);
}


console.log("Tareas de alta prioridad:", buscarTareas(tareas, PRIORIDAD_ALTA));

const fs = require('fs')

// Guardar tareas en archivo JSON
function guardarTareas(tareas) {
    const datos = JSON.stringify(tareas, null, 2)
    fs.writeFileSync('tareas.json', datos)
    console.log('Tareas guardadas correctamente')
}

guardarTareas(tareas)

function cargarTareas() {
    if (fs.existsSync('tareas.json')) {
        const datos = fs.readFileSync('tareas.json', 'utf-8')
        return JSON.parse(datos)
    } else {
        console.log('No se encontró el archivo de tareas')
        return []
    }
}

const tareasCargadas = cargarTareas()
console.log('Tareas cargadas:', tareasCargadas)