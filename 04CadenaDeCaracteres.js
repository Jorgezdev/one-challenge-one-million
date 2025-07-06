// 🔤 Operaciones con Cadenas de Caracteres en JavaScript


// 1. Acceso a caracteres específicos

```js
let texto = "JavaScript";
console.log(texto[0]);       // "J"
console.log(texto.charAt(1)); // "a"
```


// 2. Subcadenas
// con `.slice()`, `.substring()` y `.substr()` (esta última está en desuso)

```js
let texto = "Hola mundo";
console.log(texto.slice(0, 4));       // "Hola"
console.log(texto.substring(5));     // "mundo"
```



// 3. Longitud
// con `.length`

```js
let mensaje = "¡Hola!";
console.log(mensaje.length); // 6
```



// 4. Concatenación
// con `+`, `.concat()`, y Template Literals
/* 
``````js
let nombre = "Jorge";
let saludo = "Hola, " + nombre;
let otro = "¿Cómo estás?".concat(" Bien.");
let template = `Hola, ${nombre}`;
``````
*/

// 5. Repetición
// con `.repeat()`

```js
let eco = "Hey! ";
console.log(eco.repeat(3)); // "Hey! Hey! Hey! "
```



// 6. Recorrido (loop)
// con `for`, `for...of` o `.split().forEach()`

```js
let palabra = "Loop";
for (let letra of palabra) {
  console.log(letra);
}
```



// 7. Conversión a mayúsculas / minúsculas
// con `.toUpperCase()` y `.toLowerCase()`

```js
let saludo = "Hola";
console.log(saludo.toUpperCase()); // "HOLA"
console.log(saludo.toLowerCase()); // "hola"
```



// 8. Reemplazo de caracteres o subcadenas
// con `.replace()` y `.replaceAll()`

```js
let frase = "Me gusta JS";
console.log(frase.replace("JS", "JavaScript")); // "Me gusta JavaScript"
```


//9. División
// con `.split()`

```js
let lista = "manzana,pera,uva";
console.log(lista.split(",")); // ["manzana", "pera", "uva"]
```


//10. Unión (Join de strings desde un array)
//con `.join()`
```js
let frutas = ["manzana", "pera", "uva"];
console.log(frutas.join(" - ")); // "manzana - pera - uva"
```

/* 

//11. Interpolación de texto
//con Template Literals `` `${}` ``
```js
let nombre = "Jorge";
let edad = 31;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
```
*/

//12. Verificación
// (varias formas)

```js
let frase = "Hola mundo";
console.log(frase.includes("mundo")); // true
console.log(frase.startsWith("Hola")); // true
console.log(frase.endsWith("do"));     // true
```


//13. Eliminar espacios (trim)

```js
let sucio = "  texto limpio  ";
console.log(sucio.trim());      // "texto limpio"
console.log(sucio.trimStart()); // "texto limpio  "
console.log(sucio.trimEnd());   // "  texto limpio"
```

//14. Comparación
//con `===`, `==`, o `.localeCompare()`

```js
let a = "abc";
let b = "ABC";
console.log(a === b); // false
console.log(a.toLowerCase() === b.toLowerCase()); // true
```


//15. Transformar en array
//con `.split()` o `[...string]`

```js
let cadena = "Hola";
console.log(cadena.split("")); // ["H", "o", "l", "a"]
console.log([...cadena]);      // ["H", "o", "l", "a"]
```



//16. Búsqueda de posición
//con `.indexOf()` y `.lastIndexOf()`

```js
let frase = "banana";
console.log(frase.indexOf("a"));      // 1
console.log(frase.lastIndexOf("a"));  // 5
```


//17. Match con expresiones regulares

```js
let texto = "correo@mail.com";
console.log(texto.match(/\w+@\w+\.\w+/)); // ["correo@mail.com"]
```



//18. PadStart / PadEnd (relleno de texto)

```js
let numero = "5";
console.log(numero.padStart(3, "0")); // "005"
```


//19. Eliminar caracteres específicos
//usando `.replace()` con regex

```js
let sucio = "123-456.789";
let limpio = sucio.replace(/[\.\-]/g, "");
console.log(limpio); // "123456789"
```


//20. **Comparación natural con acentos / idiomas**
//con `.localeCompare()`

```js
console.log("café".localeCompare("cafe")); // depende del locale, puede ser 1 o 0
```

// 21. **Reverse de string**
//❌ No directo (los strings son inmutables)
//✅ Pero se puede hacer con conversión:

```js
let palabra = "Hola";
let invertido = palabra.split("").reverse().join("");
console.log(invertido); // "aloH"
```


// extras
```
| Operación             | ¿Posible en JS? | Método(s) / Función                  |
| --------------------- | --------------- | ------------------------------------ |
| Acceso a carácter     | ✅               | `[i]`, `.charAt()`                   |
| Subcadenas            | ✅               | `.slice()`, `.substring()`           |
| Longitud              | ✅               | `.length`                            |
| Concatenación         | ✅               | `+`, `.concat()`, template strings   |
| Repetición            | ✅               | `.repeat()`                          |
| Recorrido             | ✅               | `for`, `for...of`                    |
| Mayúsculas/Minúsculas | ✅               | `.toUpperCase()`, `.toLowerCase()`   |
| Reemplazo             | ✅               | `.replace()`, `.replaceAll()`        |
| División              | ✅               | `.split()`                           |
| Unión                 | ✅               | `.join()` (desde array)              |
| Interpolación         | ✅               | Template Literals                    |
| Verificación          | ✅               | `.includes()`, `.startsWith()`, etc. |
| Trim (espacios)       | ✅               | `.trim()`, `.trimStart()`            |
| Comparación           | ✅               | `===`, `.localeCompare()`            |
| Match Regex           | ✅               | `.match()`                           |
| Padding               | ✅               | `.padStart()`, `.padEnd()`           |
| Reverse               | ❌ (indirecto)   | `.split().reverse().join()`          |
```

```````````````````````````````````````

programa en JavaScript que:

Compara dos palabras distintas.

Te dice si son:

🔁 Palíndromos

🔀 Anagramas

🎯 Isogramas

```````````````````````````````````````


// Función para limpiar y normalizar las palabras (sin espacios, ni mayúsculas, ni acentos)
function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD") // elimina tildes
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, ""); // elimina todo lo que no sea letra
}

// Verifica si una palabra es palíndroma
function esPalindromo(palabra) {
  let limpio = limpiarTexto(palabra);
  let invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}

// Verifica si dos palabras son anagramas
function sonAnagramas(p1, p2) {
  let a = limpiarTexto(p1).split("").sort().join("");
  let b = limpiarTexto(p2).split("").sort().join("");
  return a === b && p1.toLowerCase() !== p2.toLowerCase(); // excluye palabras idénticas
}

// Verifica si una palabra es isograma (sin letras repetidas)
function esIsograma(palabra) {
  let limpio = limpiarTexto(palabra);
  let letras = new Set(limpio);
  return letras.size === limpio.length;
}

// ---------- TEST PRINCIPAL ---------- //

function analizarPalabras(p1, p2) {
  console.log(`Analizando las palabras: "${p1}" y "${p2}"\n`);

  console.log(`🔁 ¿"${p1}" es un palíndromo? →`, esPalindromo(p1));
  console.log(`🔁 ¿"${p2}" es un palíndromo? →`, esPalindromo(p2));

  console.log(`\n🔀 ¿Son anagramas? →`, sonAnagramas(p1, p2));

  console.log(`\n🎯 ¿"${p1}" es un isograma? →`, esIsograma(p1));
  console.log(`🎯 ¿"${p2}" es un isograma? →`, esIsograma(p2));
}

// Ejemplo de uso:
analizarPalabras("amor", "Roma");         // Anagramas, no palíndromos, sí isogramas
// analizarPalabras("oso", "sos");       // Palíndromos, no anagramas
// analizarPalabras("murciélago", "golmuracie"); // Anagrama, no palíndromo



