/* 
En JavaScript, las estructuras de datos soportadas por defecto son:

Primitivos
- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol

Objetos y estructuras de datos compuestas
- Object
- Array
- Set
- Map
- WeakSet
- WeakMap

A continuación, ejemplos de cada uno, su uso y su frecuencia.
*/

// 1. Primitivos (Son inmutables y muy comunes)

// 1.1 String (Cadena de texto)
// 📌 Uso: Manejo de texto
// 🔁 Frecuencia: Muy alta
let nombre = "Jorge";
console.log(nombre.toUpperCase()); // "JORGE"

// 1.2 Number (Números)
// 📌 Uso: Cálculos matemáticos
// 🔁 Frecuencia: Muy alta
let edad = 21;
let suma = edad + 5;
console.log(suma); // 26

// 1.3 Boolean (Verdadero/Falso)
// 📌 Uso: Lógica condicional
// 🔁 Frecuencia: Muy alta
let esMayor = edad > 18;
if (esMayor) console.log("Es mayor de edad"); // "Es mayor de edad"

// 1.4 Null (Ausencia intencional de un valor)
// 📌 Uso: Indicar que algo no tiene valor
// 🔁 Frecuencia: Media
let resultado = null;
console.log(resultado); // null

// 1.5 Undefined (Valor no asignado)
// 📌 Uso: Variables declaradas pero no inicializadas
// 🔁 Frecuencia: Media
let variable;
console.log(variable); // undefined

// 1.6 BigInt (Números extremadamente grandes)
// 📌 Uso: Cuando los números superan el límite de Number
// 🔁 Frecuencia: Baja
let big = 123456789012345678901234567890n;
console.log(big + 10n); // 123456789012345678901234567900n

// 1.7 Symbol (Identificadores únicos)
// 📌 Uso: Claves únicas en objetos
// 🔁 Frecuencia: Baja
const ID = Symbol("id");
let user = { [ID]: 123 };
console.log(user[ID]); // 123

// 2. Objetos y estructuras compuestas

// 2.1 Object (Objetos)
// 📌 Uso: Representación de datos estructurados
// 🔁 Frecuencia: Muy alta
let persona = { nombre: "Jorge", edad: 21 };
console.log(persona.nombre); // "Jorge"

// 2.2 Array (Arreglos)
// 📌 Uso: Listas de valores ordenados
// 🔁 Frecuencia: Muy alta
let numeros = [1, 2, 3, 4];
numeros.push(5);
console.log(numeros); // [1, 2, 3, 4, 5]

// 2.3 Set (Conjunto sin duplicados)
// 📌 Uso: Almacenar valores únicos
// 🔁 Frecuencia: Media
let conjunto = new Set([1, 2, 2, 3]);
conjunto.add(4);
console.log(conjunto); // Set { 1, 2, 3, 4 }

// 2.4 Map (Diccionario clave-valor)
// 📌 Uso: Estructura de datos flexible para pares clave-valor
// 🔁 Frecuencia: Media
let mapa = new Map();
mapa.set("nombre", "Jorge");
console.log(mapa.get("nombre")); // "Jorge"

// 2.5 WeakSet (Conjunto de objetos débiles)
// 📌 Uso: Referencias sin evitar la recolección de basura
// 🔁 Frecuencia: Baja
let objeto = { valor: 10 };
let weakSet = new WeakSet();
weakSet.add(objeto);
console.log(weakSet.has(objeto)); // true

// 2.6 WeakMap (Diccionario clave-valor con claves débiles)
// 📌 Uso: Permitir recolección de basura de claves no referenciadas
// 🔁 Frecuencia: Baja
let weakMap = new WeakMap();
let clave = {};
weakMap.set(clave, "valor débil");
console.log(weakMap.get(clave)); // "valor débil"

/* 
Conclusión: ¿Qué estructuras se usan más?

Estructura     Frecuencia    Uso
--------------------------------------------------
String         🔥🔥🔥🔥🔥       Manipulación de texto
Number         🔥🔥🔥🔥🔥       Cálculos matemáticos
Boolean        🔥🔥🔥🔥🔥       Lógica condicional
Object         🔥🔥🔥🔥🔥       Datos estructurados
Array          🔥🔥🔥🔥🔥       Listas de datos
Null/Undefined 🔥🔥🔥          Valores vacíos/sin definir
Set/Map        🔥🔥            Valores únicos / claves dinámicas
BigInt/Symbol  🔥              Casos específicos
WeakSet/WeakMap🔥              Optimización de memoria

👉 Si estás aprendiendo JavaScript o desarrollando apps, enfócate en manejar objetos, arreglos y tipos primitivos. 
Los Set, Map, WeakSet y WeakMap brillan en escenarios más avanzados.
*/
