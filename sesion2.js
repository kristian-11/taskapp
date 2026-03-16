const PRIORIDAD_ALTA = 1
const PRIORIDAD_MEDIA = 2
const PRIORIDAD_BAJA = 3

// Un array es una lista ordenada de elementos
// Se declara con corchetes []
const tareas = [
    {
        titulo: "Crear diseño de la TaskApp",
        prioridad: PRIORIDAD_BAJA,
        completada: false,
        fechaLimite: null,
        descripcion: undefined
    },
    {
        titulo: "Empezar a programar la TaskApp",
        prioridad: PRIORIDAD_ALTA,
        completada: true,
        fechaLimite: "2026-03-10",
        descripcion: "Programar siguiendo buenas prácticas"
    }
]

/* // Los arrays empiezan en el índice 0
console.log(tareas[0].titulo) // primera tarea
console.log(tareas[1].titulo) // segunda tarea
console.log(tareas.length) */

tareas.push({
    titulo: "Hacer pruebas de la TaskApp",
    prioridad: PRIORIDAD_MEDIA,
    completada: false,
    fechaLimite: "2026-04-01",
    descripcion: "Asegurarse de que todo funcione correctamente"
})

console.log(tareas[2].titulo) // tercera tarea
console.log(tareas.length) // cantidad de tareas en el array

// forEach recorre cada elemento del array
// "tarea" es el nombre que le damos a cada elemento
/* tareas.forEach(function(tarea) {
    console.log(`Título: ${tarea.titulo}`)
    console.log(`Completada: ${tarea.completada}`)
    
    if (!tarea.completada) {
        console.log("¡Esta tarea aún no está completada!")
    }
}) */

function mostrarTareas(tareas) {
    tareas.forEach(function(tarea) {
       if (tarea.prioridad === PRIORIDAD_ALTA) {
        console.log(`${tarea.titulo} ¡Esta tarea tiene alta prioridad!}`)
       }
    })
}

mostrarTareas(tareas)
