
// Concepto básico: Excepciones en JavaScript

// Simulamos un error de división por cero
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        console.error("¡Error capturado!: " + error.message);
        return null;
    } finally {
        console.log("Operación finalizada");
    }
}

console.log(divide(10, 2));  // 5
console.log(divide(5, 0));   // Error capturado + null


/**

🧩 Comparación con Python
Python	JavaScript
try:	try {}
except:	catch (error) {}
else:	(No existe directamente)
finally:	finally {}
raise Exception()	throw new Error()

 */
// throw personalizado

function validarEdad(edad) {
    if (edad < 18) {
        throw new Error("Debes ser mayor de edad.");
    }
    return "Acceso permitido.";
}

try {
    console.log(validarEdad(17));
} catch (error) {
    console.warn("Advertencia: " + error.message);
}





// uso de finally

function abrirArchivo() {
    try {
        console.log("Abriendo archivo...");
        throw new Error("Archivo corrupto");
    } catch (error) {
        console.error("Problema detectado: " + error.message);
    } finally {
        console.log("Cerrando archivo (aunque haya error)");
    }
}
abrirArchivo();

/**
 🚧 Buenas prácticas con errores
No uses throw con tipos primitivos (throw "error"), mejor usa throw new Error("mensaje").

No abuses del try/catch en lógica común, resérvalo para código que puede fallar inesperadamente (API, archivos, datos externos, etc).

Puedes crear tus propias clases de error si quieres estructurar más (herencia con class).
  
 *

/*
En JavaScript, las excepciones son errores que pueden interrumpir el flujo normal del programa.
Se utilizan try...catch...finally para manejar estos errores de forma controlada.
*/

try {
    // Forzamos un error: dividimos por cero (aunque en JS no da excepción, retorna Infinity)
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("División por cero detectada");
    }
    console.log(result);
} catch (error) {
    console.error("Error capturado:", error.message);
} finally {
    console.log("Bloque finally ejecutado (siempre se ejecuta)");
}

// Otro ejemplo: acceso a un índice inexistente en un array
try {
    let arr = [1, 2, 3];
    let value = arr[10].toString(); // Esto lanza un error porque arr[10] es undefined
} catch (error) {
    console.error("Error accediendo a índice:", error.message);
}

// ---------------------------------------------
// DIFICULTAD EXTRA
// ---------------------------------------------

/*
Vamos a crear una función que procese parámetros y pueda lanzar distintos tipos de excepciones.
También creamos una excepción personalizada.
*/

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function procesar(param) {
    if (typeof param === "undefined") {
        throw new ReferenceError("El parámetro no fue proporcionado");
    }
    if (typeof param !== "number") {
        throw new TypeError("El parámetro debe ser un número");
    }
    if (param < 0) {
        throw new CustomError("El número no puede ser negativo");
    }

    return param * 2;
}

// Llamamos a la función y capturamos las excepciones
try {
    let resultado = procesar("texto"); // Cambia el valor para probar otros casos
    console.log("Resultado:", resultado);
} catch (error) {
    console.error("Tipo de error:", error.name);
    console.error("Mensaje:", error.message);
} finally {
    console.log("Ejecución finalizada");
}
