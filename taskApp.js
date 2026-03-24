
const { agregarTarea, completarTarea, contarTareas, editarTarea, eliminarTarea, listarPorPrioridad, contarPendientes } = require('./tasks')
const { cargarTareas, guardarTareas } = require('./storage')

const tareasCargadas = cargarTareas();

const PRIORIDAD_ALTA = 1;
const PRIORIDAD_MEDIA = 2;
const PRIORIDAD_BAJA = 3;

agregarTarea(
  tareasCargadas,
  "Mantener de la TaskApp",
  PRIORIDAD_BAJA,
  false,
  "2026-04-01",
  "Asegurarse de que todo funcione correctamente"
);

//eliminarTarea(tareasCargadas, "Subir la TaskApp a GitHub")

const tareasPrioridadAlta = listarPorPrioridad(tareasCargadas).filter(t => t.prioridad === PRIORIDAD_ALTA)
console.log("Tareas de prioridad alta:", tareasPrioridadAlta)


completarTarea(tareasCargadas, "Crear diseño de la TaskApp")

const pendientes = contarPendientes(tareasCargadas)
console.log(`Tareas pendientes: ${pendientes}`)


guardarTareas(tareasCargadas)



console.log(`Total de tareas: ${contarTareas(tareasCargadas)}`)

const completadas = tareasCargadas.filter(t => t.completada)

console.log(`Tareas completadas: ${completadas.length}`)






