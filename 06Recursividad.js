// =============================================
// 📘 ¿Qué es la recursividad?
// =============================================
// La recursividad es una técnica de programación donde una función se llama a sí misma.
// Se usa para resolver problemas que pueden dividirse en subproblemas similares al original.
// Muy útil en estructuras jerárquicas, cálculos matemáticos, procesamiento de árboles, etc.

// ⚠️ IMPORTANTE:
// Una función recursiva debe tener un caso base (o condición de parada),
// que impide que se ejecute infinitamente.


// ===================================================
// 🔁 Ejemplo simple: imprimir números del 100 al 0
// ===================================================
function contarRegresivo(numero) {
  if (numero < 0) return;
  console.log(numero);
  contarRegresivo(numero - 1);
}

// Llamada de prueba
contarRegresivo(100);


// =============================================
// 🧮 Factorial de un número usando recursividad
// =============================================
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Ejemplo:
console.log("Factorial de 5:", factorial(5)); // 120


// =============================================
// 🌀 Sucesión de Fibonacci usando recursividad
// =============================================
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ...
// Posiciones:0  1  2  3  4  5  6   7

function fibonacci(posicion) {
  if (posicion < 0) return null;
  if (posicion === 0) return 0;
  if (posicion === 1) return 1;
  return fibonacci(posicion - 1) + fibonacci(posicion - 2);
}

// Ejemplo:
console.log("Fibonacci en posición 6:", fibonacci(6)); // 8


// =============================================
// 🔍 NOTA sobre Fibonacci recursivo
// =============================================
// El algoritmo recursivo de Fibonacci es poco eficiente porque recalcula
// los mismos valores muchas veces. Para mejorar esto se usa *memoización*
// o se implementa una versión iterativa. Aquí va una optimización:

function fibonacciMemo(n, memo = {}) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log("Fibonacci (con memo) posición 10:", fibonacciMemo(10)); // 55
