//📅 Fechas en JavaScript — Resumen rápido
//En JavaScript, el objeto para trabajar con fechas es Date.
//Se puede crear de varias formas:

// Fecha actual
const fechaActual = new Date();

// Con fecha específica (año, mes, día, hora, min, seg, ms)
// Ojo: el mes es base 0 → enero = 0, diciembre = 11
const fechaEspecifica = new Date(2020, 0, 15, 10, 30, 0);

// Con fecha en string
const fechaString = new Date("2020-01-15T10:30:00");

// Con timestamp (milisegundos desde 1 enero 1970 UTC)
const fechaTimestamp = new Date(1600000000000);


/* Métodos útiles
Obtener partes de la fecha: */

/*  */

fechaActual.getFullYear();   // Año (ej: 2025)
fechaActual.getMonth();      // Mes (0-11)
fechaActual.getDate();       // Día del mes (1-31)
fechaActual.getDay();        // Día de la semana (0=Dom, 6=Sáb)
fechaActual.getHours();      // Hora
fechaActual.getMinutes();    // Minuto
fechaActual.getSeconds();    // Segundo


/* Formatear fechas: */

fechaActual.toLocaleDateString("es-CL");   // "11-08-2025"
fechaActual.toLocaleString("es-CL");       // "11-8-2025, 22:15:30"
fechaActual.toISOString();                 // "2025-08-11T01:15:30.000Z"


/* Operaciones:
Restar fechas da la diferencia en milisegundos: */

const diff = fechaActual - fechaEspecifica;
const dias = diff / (1000 * 60 * 60 * 24);


/* Ejercicio en JavaScript */

// Fecha actual
const fechaActual = new Date();

// Fecha de nacimiento inventada
const fechaNacimiento = new Date(1995, 4, 15, 14, 30, 0); // 15 mayo 1995, 14:30

// Calcular años transcurridos
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
const mesActual = fechaActual.getMonth();
const diaActual = fechaActual.getDate();

// Ajustar si el cumpleaños no ha pasado este año
if (
  mesActual < fechaNacimiento.getMonth() ||
  (mesActual === fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())
) {
  edad--;
}

console.log(`Han pasado ${edad} años desde mi nacimiento.`);

// --- DIFICULTAD EXTRA: Formatos diferentes ---
console.log("1. Día/Mes/Año:", fechaNacimiento.toLocaleDateString("es-CL"));
console.log("2. Hora:Minuto:Segundo:", fechaNacimiento.toLocaleTimeString("es-CL"));
console.log("3. Año:", fechaNacimiento.getFullYear());
console.log("4. Mes (número):", fechaNacimiento.getMonth() + 1);
console.log("5. Día del mes:", fechaNacimiento.getDate());
console.log("6. Día de la semana (0=Dom):", fechaNacimiento.getDay());
console.log("7. ISO completo:", fechaNacimiento.toISOString());
console.log("8. Fecha en inglés:", fechaNacimiento.toLocaleDateString("en-US"));
console.log("9. Nombre del mes:", fechaNacimiento.toLocaleString("es-CL", { month: "long" }));
console.log("10. Día del año:", Math.floor(
  (fechaNacimiento - newDate(fechaNacimiento.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
));



/* 🔍 Explicación del cálculo de edad
Restamos el año actual menos el año de nacimiento.

Si el mes actual es menor al mes de nacimiento, o si estamos en el mismo mes pero antes del día, restamos 1 año.

Esto asegura que la edad sea exacta. */





/* Aquí tienes el ejemplo completo en JavaScript, con explicaciones en los comentarios para que puedas copiarlo y entender cada parte: */


// =============================
// FECHAS EN JAVASCRIPT
// =============================

// Crear una fecha con el momento actual
const fechaActual = new Date(); // Devuelve la fecha y hora del momento de ejecución

// Crear una fecha específica (fecha de nacimiento inventada)
// Formato: new Date(año, mes, día, hora, minuto, segundo)
// OJO: El mes en JavaScript empieza en 0 (Enero = 0, Febrero = 1, etc.)
const fechaNacimiento = new Date(1995, 4, 15, 10, 30, 0); // 15 Mayo 1995, 10:30:00

// =============================
// CÁLCULO DE AÑOS TRANSCURRIDOS
// =============================

// Diferencia en milisegundos entre ambas fechas
const diferenciaMs = fechaActual - fechaNacimiento;

// Convertir milisegundos a años (aproximado considerando 365.25 días por año)
const msPorAño = 1000 * 60 * 60 * 24 * 365.25;
const añosTranscurridos = Math.floor(diferenciaMs / msPorAño);

console.log(`Han pasado ${añosTranscurridos} años desde la fecha de nacimiento.`);

// =============================
// FORMATEOS EXTRA
// =============================

console.log("\n=== Formatos de la fecha de nacimiento ===");
console.log("1. Día/Mes/Año:", fechaNacimiento.getDate(), "/", fechaNacimiento.getMonth() + 1, "/", fechaNacimiento.getFullYear());
console.log("2. Hora:Minuto:Segundo:", fechaNacimiento.getHours(), ":", fechaNacimiento.getMinutes(), ":", fechaNacimiento.getSeconds());
console.log("3. Día del año:", Math.floor((fechaNacimiento - new Date(fechaNacimiento.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)));
console.log("4. Día de la semana (0=Domingo):", fechaNacimiento.getDay());
console.log("5. Nombre del mes:", fechaNacimiento.toLocaleString("es-ES", { month: "long" }));
console.log("6. Fecha en formato local:", fechaNacimiento.toLocaleDateString());
console.log("7. Hora en formato local:", fechaNacimiento.toLocaleTimeString());
console.log("8. Formato ISO:", fechaNacimiento.toISOString());
console.log("9. Fecha larga:", fechaNacimiento.toLocaleString("es-ES", { dateStyle: "full" }));
console.log("10. Fecha y hora completa:", fechaNacimiento.toLocaleString());

// =============================
// NOTA SOBRE USO DE FECHAS
// =============================
// - JavaScript trabaja internamente con fechas en milisegundos desde el 1 de enero de 1970 (UTC).
// - Los métodos getDate(), getMonth(), getFullYear(), etc., permiten desglosar la fecha.
// - Para formatear, puedes usar toLocaleDateString(), toLocaleTimeString() o librerías como moment.js o day.js.


/* 📌 Resumen rápido de puntos clave:

En JavaScript, los meses empiezan en 0 (enero) y terminan en 11 (diciembre).

Date trabaja con milisegundos desde el 1 de enero de 1970 (Epoch).

Para cálculos de años, meses o días, se convierte la diferencia de milisegundos.

toLocaleString() y similares sirven para dar formatos más legibles y regionales.

Si quieres, puedo hacerte otra versión optimizada usando Intl.DateTimeFormat para mostrar los formatos de manera más profesional y sin tanto código repetido.     */