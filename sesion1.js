// En JavaScript tenemos 3 formas de declarar variables
// Hoy usaremos let y const — olvida var por ahora

// CONST: cuando el valor NO va a cambiar
const appName = "TaskApp";       // tipo: string (texto)
const maxTareas = 100;           // tipo: number (número)

// LET: cuando el valor SÍ puede cambiar
let tareasCompletadas = 0;       // tipo: number
let usuarioActivo = true;        // tipo: boolean (true/false)
let fechaLimite = null;          // tipo: null (ausencia de valor)

// Así vemos los valores en consola
console.log(appName);
console.log(tareasCompletadas);
console.log(usuarioActivo);

// null: ausencia INTENCIONAL de valor
let fechaLimite1 = null;
console.log(fechaLimite1); // null

// undefined: ausencia NO intencional
let descripcion;
console.log(descripcion); // undefined

// ¿Son iguales?
console.log(fechaLimite1 == descripcion);  // 
console.log(fechaLimite1 === descripcion); // 