// ============================
// funciones.js
// ============================

// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// Diccionario con datos ficticios
const persona = {
  name: "Carlos Pérez",
  age: 28,
  birth_date: "1997-03-15",
  programming_languages: ["JavaScript", "Python", "Go"]
};

// Exportamos para que Jest pueda importarlos
module.exports = { sumar, persona };
