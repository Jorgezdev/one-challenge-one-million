// * - Crea un comentario en el código y coloca la URL del sitio web oficial del
//   lenguaje de programación que has seleccionado.
// ejercicio 1 https://www.ecma-international.org/ecma-262/

// - Representa las diferentes sintaxis que existen de crear comentarios
//   en el lenguaje (en una línea, varias...).

 // Esto es un comentario de una línea
let x = 10; // También puede estar al final de una línea de código

/*
Esto es un comentario
de varias líneas
*/

// Comentarios en JSDoc - Se usan para documentar funciones, métodos, clases, y parámetros con anotaciones específicas.
/**
 * Suma dos números y devuelve el resultado.
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - La suma de a y b
 */
function suma(a, b) {
    return a + b;
}

// Comentarios en JSX (React) -En archivos JSX (React), los comentarios dentro del return deben estar entre {/* ... */}.
//function Componente() {
//    return (
//        <div>
            {/* Esto es un comentario en JSX */}
//            <h1>Hola, mundo</h1>
//        </div>
//    );
//}

// Comentarios en JSON (⚠ No permitidos oficialmente)
// JSON no admite comentarios de forma nativa, pero en algunos casos, puedes encontrarte con archivos .jsonc (JSON con comentarios) que los permiten:

{
    // Este es un comentario en JSONC

}

//Con esto tienes cubiertas todas las formas de comentar en JavaScript según el contexto.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Crea una variable (y una constante si el lenguaje lo soporta).

let edad = 18; // Variable que puede cambiar su valor
const nombre = "Joako"; // Constante cuyo valor no puede ser reasignado

console.log(`Nombre: ${nombre}, Edad: ${edad}`);


//- Crea variables representando todos los tipos de datos primitivos
//  del lenguaje (cadenas de texto, enteros, booleanos...).

// String (cadena de texto)
let Nombre = "Joako";

// Number (número, incluye enteros y decimales)
let Edad = 18;
let altura = 1.78;

// Boolean (verdadero o falso)
let esJugador = true;
let tienePermiso = false;

// Undefined (variable declarada pero sin valor asignado)
let valorIndefinido;

// Null (valor explícitamente vacío)
let datoNulo = null;

// BigInt (números enteros extremadamente grandes, se usa 'n' al final)
let numeroGrande = 9007199254740991n;

// Symbol (valor único e inmutable)
let idUnico = Symbol("id");

console.log(nombre, edad, altura, esJugador, tienePermiso, valorIndefinido, datoNulo, numeroGrande, idUnico);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//- Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
//

let lenguaje = "JavaScript";
console.log(`¡Hola mundo! Bienvenido a ${lenguaje}`);
