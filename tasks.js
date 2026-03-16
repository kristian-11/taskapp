function agregarTarea(tareas, titulo, prioridad, completada, fechaLimite, descripcion) {

  const existe = tareas.some(tarea => tarea.titulo === titulo);

  if (existe) {
    console.log("La tarea ya existe, no se agregará.");
    return null;
  }

  const nuevaTarea = {
    titulo: titulo,
    prioridad: prioridad,
    completada: completada,
    fechaLimite: fechaLimite,
    descripcion: descripcion,
  };

  tareas.push(nuevaTarea);
  return nuevaTarea;
}


function completarTarea(tareasCargadas, titulo) {
  const tarea = tareasCargadas.find(tarea => tarea.titulo === titulo);
  if (tarea) {
    tarea.completada = true;
    return true;
  }
  return false;
}

function contarTareas(tareas) {
  return tareas.length;
}

function eliminarTarea(tareas, titulo) {
  const indice = tareas.findIndex(tarea => tarea.titulo === titulo);
  if (indice !== -1) {
    tareas.splice(indice, 1);
    return true;
  }
  return false;
}

function editarTarea(tareas, titulo, nuevosDatos) {
  const tarea = tareas.find(tarea => tarea.titulo === titulo);
  if (tarea) {
    Object.assign(tarea, nuevosDatos);
    return true;
  }
  return false;
}


module.exports = {
  agregarTarea,
  completarTarea,
  contarTareas,
  eliminarTarea,
  editarTarea,
};

