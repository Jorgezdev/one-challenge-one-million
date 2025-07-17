// =======================================================
// 🔁 ASIGNACIÓN POR VALOR
// =======================================================
// En JavaScript, los tipos primitivos (number, string, boolean, null, undefined, symbol, bigint)
// se asignan por valor. Esto significa que cuando haces una copia, se copia el contenido,
// no la referencia.

let a = 10;
let b = a; // b recibe una copia del valor de a
b = 20;

console.log("Valor de a (original):", a); // 10 (no cambia)
console.log("Valor de b (modificado):", b); // 20

// =======================================================
// 🔁 ASIGNACIÓN POR REFERENCIA
// =======================================================
// Los objetos (incluyendo arrays y funciones) se asignan por referencia.
// Esto significa que al asignar un objeto a otra variable, ambas apuntan al mismo espacio en memoria.

let obj1 = { nombre: "Jorge" };
let obj2 = obj1; // obj2 apunta al mismo objeto que obj1

obj2.nombre = "Marcos"; // modificamos desde obj2

console.log("obj1.nombre:", obj1.nombre); // "Marcos" (ambos cambiaron)
console.log("obj2.nombre:", obj2.nombre); // "Marcos"

// =======================================================
// 📦 PASAJE POR VALOR A FUNCIONES
// =======================================================
// Cuando pasamos un tipo primitivo a una función, se pasa por valor.
// Esto significa que cualquier cambio dentro de la función no afecta al valor original.

function cambiarValor(x) {
  x = x + 10;
  console.log("Dentro de la función (valor cambiado):", x);
}

let numero = 5;
cambiarValor(numero);
console.log("Fuera de la función:", numero); // 5 (sin cambios)

// =======================================================
// 🧠 PASAJE POR REFERENCIA A FUNCIONES
// =======================================================
// Si pasamos un objeto a una función, se pasa por referencia.
// Cambiar propiedades del objeto dentro de la función afecta al objeto original.

function cambiarObjeto(obj) {
  obj.nombre = "Modificado";
}

let persona = { nombre: "Original" };
cambiarObjeto(persona);
console.log("persona.nombre:", persona.nombre); // "Modificado"

// =======================================================
// 💥 DESAFÍO EXTRA - Parte 1
// 🟡 INTERCAMBIO DE PRIMITIVOS (por valor)
// =======================================================
// En este caso, los valores son copias. No hay forma de intercambiarlos realmente fuera de la función
// a menos que retornemos los nuevos valores.

function intercambiarPorValor(x, y) {
  let temp = x;
  x = y;
  y = temp;
  return [x, y]; // devolvemos los intercambiados
}

let valor1 = 1;
let valor2 = 2;

let [nuevoValor1, nuevoValor2] = intercambiarPorValor(valor1, valor2);

console.log("Originales → valor1:", valor1, "valor2:", valor2); // 1, 2
console.log("Nuevos     → nuevoValor1:", nuevoValor1, "nuevoValor2:", nuevoValor2); // 2, 1

// =======================================================
// 💥 DESAFÍO EXTRA - Parte 2
// 🟢 INTERCAMBIO DE OBJETOS (por referencia)
// =======================================================
// Como los objetos se pasan por referencia, podemos modificar sus propiedades directamente.

function intercambiarReferencias(obj1, obj2) {
  let temp = { ...obj1 }; // hacemos una copia superficial de obj1
  obj1.nombre = obj2.nombre;
  obj2.nombre = temp.nombre;
  return [obj1, obj2];
}

let persona1 = { nombre: "Alice" };
let persona2 = { nombre: "Bob" };

let [nuevaPersona1, nuevaPersona2] = intercambiarReferencias(persona1, persona2);

console.log("Originales → persona1:", persona1.nombre, "persona2:", persona2.nombre); // Bob, Alice
console.log("Nuevos     → nuevaPersona1:", nuevaPersona1.nombre, "nuevaPersona2:", nuevaPersona2.nombre); // Bob, Alice
