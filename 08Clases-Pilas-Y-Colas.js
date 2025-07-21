
// ========================================
// CONCEPTO DE CLASES EN JAVASCRIPT
// ========================================

// En JavaScript, una clase es una plantilla para crear objetos.
// Utiliza el método constructor() para inicializar atributos.
// También puedes definir métodos que se asocian a esa clase.

// EJEMPLO BÁSICO DE CLASE

class Persona {
  constructor(nombre, edad) {
    // El constructor se ejecuta cuando se crea un nuevo objeto de esta clase
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método para imprimir los datos del objeto
  imprimirDatos() {
    console.log(\`Nombre: \${this.nombre}, Edad: \${this.edad}\`);
  }
}

// Creamos una instancia de la clase Persona
const persona1 = new Persona("Jorge", 31);
persona1.imprimirDatos(); // Imprime: Nombre: Jorge, Edad: 31

// Modificamos sus atributos
persona1.nombre = "Kokeaft";
persona1.edad = 32;
persona1.imprimirDatos(); // Imprime: Nombre: Kokeaft, Edad: 32


// ========================================
// DIFICULTAD EXTRA: CLASE PILA (STACK)
// ========================================

// Una pila funciona con el principio LIFO (Last In, First Out)

class Pila {
  constructor() {
    this.items = [];
  }

  // Agrega un elemento al tope de la pila
  push(elemento) {
    this.items.push(elemento);
  }

  // Elimina y retorna el último elemento agregado
  pop() {
    return this.items.pop();
  }

  // Retorna el número de elementos en la pila
  size() {
    return this.items.length;
  }

  // Muestra todos los elementos de la pila
  imprimir() {
    console.log("Pila:", this.items.join(" <- "));
  }
}

// Uso de la clase Pila
const miPila = new Pila();
miPila.push("primer valor");
miPila.push("segundo valor");
miPila.imprimir(); // Pila: primer valor <- segundo valor
miPila.pop();
miPila.imprimir(); // Pila: primer valor


// ========================================
// DIFICULTAD EXTRA: CLASE COLA (QUEUE)
// ========================================

// Una cola funciona con el principio FIFO (First In, First Out)

class Cola {
  constructor() {
    this.items = [];
  }

  // Agrega un elemento al final de la cola
  enqueue(elemento) {
    this.items.push(elemento);
  }

  // Elimina y retorna el primer elemento ingresado
  dequeue() {
    return this.items.shift();
  }

  // Retorna el número de elementos en la cola
  size() {
    return this.items.length;
  }

  // Muestra todos los elementos de la cola
  imprimir() {
    console.log("Cola:", this.items.join(" -> "));
  }
}

// Uso de la clase Cola
const miCola = new Cola();
miCola.enqueue("doc1.pdf");
miCola.enqueue("doc2.pdf");
miCola.imprimir(); // Cola: doc1.pdf -> doc2.pdf
miCola.dequeue();
miCola.imprimir(); // Cola: doc2.pdf

