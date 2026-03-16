
const { agregarTarea, completarTarea, contarTareas, editarTarea, eliminarTarea } = require('./tasks')
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

completarTarea(tareasCargadas, "Crear diseño de la TaskApp")


guardarTareas(tareasCargadas)



console.log(`Total de tareas: ${contarTareas(tareasCargadas)}`)

const completadas = tareasCargadas.filter(t => t.completada)

console.log(`Tareas completadas: ${completadas.length}`)






