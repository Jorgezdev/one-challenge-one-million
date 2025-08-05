// ===============================================================
// ✅ PRUEBAS UNITARIAS EN JAVASCRIPT
// ===============================================================
// Las pruebas unitarias son tests que verifican que una pequeña parte del código (una función, un método)
// funciona como se espera. En JavaScript se suelen realizar usando librerías como Jest o Mocha,
// pero también se pueden hacer con las funciones integradas de Node.js como `assert`.

// ---------------------------------------------------------------
// 📌 ¿Por qué hacer pruebas unitarias?
// ---------------------------------------------------------------
// - Detectan errores de forma temprana.
// - Ayudan a mantener el código funcionando a medida que se hacen cambios.
// - Mejoran la calidad y la confianza en el software.

const assert = require('assert'); // Módulo nativo de Node.js para hacer comprobaciones

// ===============================================================
// 🔹 EJEMPLO 1: Función de suma + prueba unitaria
// ===============================================================

// Función que suma dos números
function sumar(a, b) {
  return a + b;
}

// Prueba unitaria de la función sumar
try {
  assert.strictEqual(sumar(2, 3), 5); // Comprobamos que 2 + 3 sea igual a 5
  console.log('✅ Test de suma pasado correctamente.');
} catch (error) {
  console.error('❌ Test de suma fallido:', error.message);
}

// ===============================================================
// 🔹 DIFICULTAD EXTRA
// ===============================================================
// Creamos un diccionario (objeto en JS) con información personal

const datos = {
  name: 'kokeaft',
  age: 14,
  birth_date: '2007-04-10',
  programming_languages: ['JavaScript', 'Python', 'C++']
};

// ---------------------------------------------------------------
// Test 1: Verificar que existen todos los campos
// ---------------------------------------------------------------
// assert.ok() comprueba que el valor es verdadero, si no, lanza un error
try {
  assert.ok(datos.hasOwnProperty('name'), 'Falta el campo name');
  assert.ok(datos.hasOwnProperty('age'), 'Falta el campo age');
  assert.ok(datos.hasOwnProperty('birth_date'), 'Falta el campo birth_date');
  assert.ok(datos.hasOwnProperty('programming_languages'), 'Falta el campo programming_languages');
  console.log('✅ Test 1: Todos los campos existen.');
} catch (error) {
  console.error('❌ Test 1 fallido:', error.message);
}

// ---------------------------------------------------------------
// Test 2: Verificar que los datos son correctos
// ---------------------------------------------------------------
// assert.strictEqual() compara valores simples (números, strings)
// assert.deepStrictEqual() compara estructuras como arrays u objetos
try {
  assert.strictEqual(datos.name, 'kokeaft');
  assert.strictEqual(datos.age, 14);
  assert.strictEqual(datos.birth_date, '2007-04-10');
  assert.deepStrictEqual(datos.programming_languages, ['JavaScript', 'Python', 'C++']);
  console.log('✅ Test 2: Los datos son correctos.');
} catch (error) {
  console.error('❌ Test 2 fallido:', error.message);
}
