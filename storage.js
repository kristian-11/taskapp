const fs = require('fs')

function cargarTareas() {
    if (fs.existsSync('tareas.json')) {
        const datos = fs.readFileSync('tareas.json', 'utf-8')
        return JSON.parse(datos)
    } else {
        console.log('No se encontró el archivo de tareas')
        return []
    }
}

function guardarTareas(tareas) {
    const datos = JSON.stringify(tareas, null, 2)
    fs.writeFileSync('tareas.json', datos)
    console.log('Tareas guardadas correctamente')
}

module.exports = {
    cargarTareas,
    guardarTareas,
};