class Tarea {
  // constructor: se ejecuta al crear una nueva tarea
  constructor(titulo, prioridad) {
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
    this.fechaLimite = null;
    this.descripcion = null;
  }

  // Método para marcar la tarea como completada
  completar() {
    this.completada = true;
  }

  // metodo para editar las propiedades de la tarea
  editar(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }

  // Método para devolver un string con el resumen de la tarea toString()
  toString() {
    const estado = this.completada ? "✅ COMPLETADA" : "⏳ PENDIENTE";
    return `[${estado}] ${this.titulo} (Prioridad: ${this.prioridad})`;
  }
}

class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(titulo, prioridad) {
    const nuevaTarea = new Tarea(titulo, prioridad);
    this.tareas.push(nuevaTarea);
    return nuevaTarea;
  }

  // metodo buscar la tarea y llamar a su metodo completar()
  completar(titulo) {
    const tarea = this.tareas.find((t) => t.titulo === titulo);
    if (tarea) {
      tarea.completar();
      return true;
    }
    return false;
  }

  // metodo mostras todas la tareas usando su metodo toString()
  listarTareas() {
    return this.tareas.map((t) => t.toString()).join("\n");
  }

  // metodo para devolver cuantas tareas estan pendientes
  contarPendientes() {
    return this.tareas.filter((t) => !t.completada).length;
  }
}

// Crear una instancia de Tarea
const tarea = new Tarea("Crear diseño de la TaskApp", 1);
console.log(`Antes: ${tarea.completada}`);
tarea.completar();
console.log(`Después: ${tarea.completada}`);
console.log("Editando tarea...");
tarea.editar({ prioridad: 2, descripcion: "Diseñar la interfaz de usuario" });
console.log(tarea);
console.log(tarea.toString());
console.log("Creando gestor de tareas...");
const gestor = new GestorTareas();
gestor.agregarTarea("Subir la TaskApp a GitHub", 2);
console.log(gestor.tareas);
gestor.completar("Subir la TaskApp a GitHub");
console.log(gestor.listarTareas());
console.log(`Tareas pendientes: ${gestor.contarPendientes()}`);

