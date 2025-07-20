/***********************************************
 * CONCEPTOS: PILAS Y COLAS EN JAVASCRIPT
 ***********************************************/

// PILAS (Stacks) - LIFO: Last In, First Out
// Se utiliza en situaciones como deshacer cambios, navegación web atrás/adelante, etc.

console.log("=== PILAS (STACK - LIFO) ===");

class Pila {
  constructor() {
    this.items = [];
  }

  // Agrega un elemento al tope
  push(elemento) {
    this.items.push(elemento);
  }

  // Quita el último elemento agregado
  pop() {
    return this.items.pop();
  }

  // Devuelve el último elemento sin quitarlo
  peek() {
    return this.items[this.items.length - 1];
  }

  // Verifica si está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Muestra todo
  mostrar() {
    console.log([...this.items]);
  }
}

const pila = new Pila();
pila.push("A");
pila.push("B");
pila.push("C");
pila.mostrar();     // ["A", "B", "C"]
console.log(pila.pop()); // "C"
pila.mostrar();     // ["A", "B"]


// COLAS (Queues) - FIFO: First In, First Out
// Útiles para manejo de procesos, turnos, impresión, etc.

console.log("\n=== COLAS (QUEUE - FIFO) ===");

class Cola {
  constructor() {
    this.items = [];
  }

  // Agrega un elemento al final
  enqueue(elemento) {
    this.items.push(elemento);
  }

  // Quita el primer elemento agregado
  dequeue() {
    return this.items.shift();
  }

  // Muestra el primero sin quitarlo
  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  mostrar() {
    console.log([...this.items]);
  }
}

const cola = new Cola();
cola.enqueue("1");
cola.enqueue("2");
cola.enqueue("3");
cola.mostrar();      // ["1", "2", "3"]
console.log(cola.dequeue()); // "1"
cola.mostrar();      // ["2", "3"]


/***********************************************
 * DIFICULTAD EXTRA: SIMULACIÓN DE NAVEGADOR WEB (PILA)
 ***********************************************/

console.log("\n=== NAVEGADOR WEB - ADELANTE / ATRÁS ===");

class Navegador {
  constructor() {
    this.historial = new Pila();
    this.futuro = new Pila();
    this.actual = null;
  }

  visitar(web) {
    if (this.actual) {
      this.historial.push(this.actual);
    }
    this.actual = web;
    this.futuro = new Pila(); // Se limpia el futuro al navegar a nueva página
    console.log(`Visitando: ${this.actual}`);
  }

  atras() {
    if (!this.historial.isEmpty()) {
      this.futuro.push(this.actual);
      this.actual = this.historial.pop();
      console.log(`Atrás a: ${this.actual}`);
    } else {
      console.log("No hay páginas anteriores");
    }
  }

  adelante() {
    if (!this.futuro.isEmpty()) {
      this.historial.push(this.actual);
      this.actual = this.futuro.pop();
      console.log(`Adelante a: ${this.actual}`);
    } else {
      console.log("No hay páginas siguientes");
    }
  }
}

// Simulación
const navegador = new Navegador();

navegador.visitar("google.com");
navegador.visitar("youtube.com");
navegador.visitar("github.com");
navegador.atras();     // youtube.com
navegador.atras();     // google.com
navegador.adelante();  // youtube.com
navegador.visitar("stackoverflow.com"); // se borra el futuro

/***********************************************
 * DIFICULTAD EXTRA: SIMULACIÓN DE IMPRESORA (COLA)
 ***********************************************/

console.log("\n=== IMPRESORA COMPARTIDA - COLA ===");

class Impresora {
  constructor() {
    this.cola = new Cola();
  }

  agregarDocumento(nombre) {
    this.cola.enqueue(nombre);
    console.log(`Documento agregado: ${nombre}`);
  }

  imprimir() {
    if (!this.cola.isEmpty()) {
      const doc = this.cola.dequeue();
      console.log(`Imprimiendo documento: ${doc}`);
    } else {
      console.log("No hay documentos por imprimir.");
    }
  }

  mostrarCola() {
    this.cola.mostrar();
  }
}

// Simulación
const impresora = new Impresora();

impresora.agregarDocumento("Contrato.pdf");
impresora.agregarDocumento("Curriculum.docx");
impresora.agregarDocumento("Factura123.xlsx");

impresora.imprimir(); // Imprime Contrato.pdf
impresora.imprimir(); // Imprime Curriculum.docx
impresora.mostrarCola(); // ["Factura123.xlsx"]


/***********************************************
Resumen rápido:
Pilas (Stacks) usan .push() y .pop() → Lo último en entrar es lo primero en salir.

Colas (Queues) usan .push() y .shift() → Lo primero en entrar es lo primero en salir.

Se pueden implementar fácilmente con Array.

Simulamos:

Un navegador con una pila doble (historial y futuro).

Una impresora con una cola (FIFO puro).
 ***********************************************/