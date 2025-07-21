
// ==================================================
// 📚 CONCEPTO DE CLASE EN JAVASCRIPT
// ==================================================
// En JavaScript, una clase es una plantilla para crear objetos.
// Puedes definir atributos (propiedades) y métodos (funciones).
// Las clases fueron introducidas en ES6 (2015) y son azúcar sintáctica
// sobre el sistema de prototipos existente en JavaScript.

// ==================================================
// 🎓 EJEMPLO BÁSICO DE CLASE
// ==================================================

class Persona {
    // Constructor: método especial que se ejecuta al instanciar la clase
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para imprimir los atributos
    imprimirDatos() {
        console.log(\`Nombre: \${this.nombre}, Edad: \${this.edad}\`);
    }
}

// Crear una instancia de la clase
const persona1 = new Persona("ferbe", 30);
persona1.imprimirDatos(); // Muestra: Nombre: ferbe, Edad: 30

// Modificar atributos
persona1.nombre = "Kaka";
persona1.edad = 32;
persona1.imprimirDatos(); // Muestra: Nombre: Kaka, Edad: 32

// ==================================================
// 📦 CLASE PILA (STACK - LIFO)
// ==================================================

class Pila {
    constructor() {
        this.items = []; // Lista interna para guardar elementos
    }

    // Añadir elemento (push)
    agregar(elemento) {
        this.items.push(elemento);
    }

    // Eliminar último elemento (pop)
    eliminar() {
        return this.items.pop();
    }

    // Obtener número de elementos
    contar() {
        return this.items.length;
    }

    // Imprimir contenido
    imprimir() {
        console.log("Contenido de la pila:", this.items);
    }
}

// Prueba de la clase Pila
const pila = new Pila();
pila.agregar("uno");
pila.agregar("dos");
pila.imprimir(); // ["uno", "dos"]
pila.eliminar(); // Elimina "dos"
pila.imprimir(); // ["uno"]

// ==================================================
// 📨 CLASE COLA (QUEUE - FIFO)
// ==================================================

class Cola {
    constructor() {
        this.items = [];
    }

    // Añadir elemento al final
    encolar(elemento) {
        this.items.push(elemento);
    }

    // Eliminar primer elemento
    desencolar() {
        return this.items.shift();
    }

    // Obtener número de elementos
    contar() {
        return this.items.length;
    }

    // Imprimir contenido
    imprimir() {
        console.log("Contenido de la cola:", this.items);
    }
}

// Prueba de la clase Cola
const cola = new Cola();
cola.encolar("a");
cola.encolar("b");
cola.imprimir(); // ["a", "b"]
cola.desencolar(); // Elimina "a"
cola.imprimir(); // ["b"];
