// ============================
// funciones.test.js
// ============================

// Importamos las funciones y datos
const { sumar, persona } = require("./funciones");

// ----------------------------
// Test 1: Verificar suma de dos números
// ----------------------------
test("La función sumar debe retornar la suma correcta de dos números", () => {
  expect(sumar(3, 4)).toBe(7); // 3 + 4 = 7
});

// ----------------------------
// Test EXTRA 1: Verificar que existen todos los campos en 'persona'
// ----------------------------
test("El objeto persona debe contener todos los campos requeridos", () => {
  expect(persona).toHaveProperty("name");
  expect(persona).toHaveProperty("age");
  expect(persona).toHaveProperty("birth_date");
  expect(persona).toHaveProperty("programming_languages");
});

// ----------------------------
// Test EXTRA 2: Verificar que los datos introducidos son correctos
// ----------------------------
test("Los datos del objeto persona son correctos", () => {
  expect(persona.name).toBe("Carlos Pérez");
  expect(persona.age).toBe(28);
  expect(persona.birth_date).toBe("1997-03-15");
  expect(persona.programming_languages).toEqual(
    expect.arrayContaining(["JavaScript", "Python", "Go"])
  );
});
