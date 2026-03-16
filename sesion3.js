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
    descripcion: undefined,
  },
  {
    titulo: "Empezar a programar la TaskApp",
    prioridad: PRIORIDAD_ALTA,
    completada: true,
    fechaLimite: "2026-03-10",
    descripcion: "Programar siguiendo buenas prácticas",
  },
];

function agregarTarea(tareas, titulo, prioridad) {
  const nuevaTarea = {
    titulo,
    prioridad,
    completada: false,
    fechaLimite: null,
    descripcion: undefined,
  };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function contarTareas(tareas) {
  return tareas.length;
}

function contarCompletadas(tareas) {
  return tareas.filter((tarea) => tarea.completada).length;
}

// Probar las tres funciones
agregarTarea(tareas, "Hacer pruebas de la TaskApp", PRIORIDAD_MEDIA);

console.log(`Total de tareas: ${contarTareas(tareas)}`);
console.log(`Tareas completadas: ${contarCompletadas(tareas)}`);

function completarTarea(tareas, titulo) {
  const tarea = tareas.find(tarea => tarea.titulo === titulo);
  if (tarea) {
    tarea.completada = true;
    return true;
  }
  return false;
}

function eliminarTarea(tareas, titulo) {
  const indice = tareas.findIndex((tarea) => tarea.titulo === titulo);
  if (indice !== -1) {
    tareas.splice(indice, 1);
    return true;
  }
  return false;
}

console.log(
  `¿Tarea completada?: ${completarTarea(tareas, "Crear diseño de la TaskApp")}`,
);
console.log(
  `¿Tarea eliminada?: ${eliminarTarea(tareas, "Empezar a programar la TaskApp")}`,
);
