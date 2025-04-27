// Resumen de clases abstractas en JavaScript

// En JavaScript NO existen clases abstractas nativamente.
// Pero se pueden SIMULAR con "throw" y "new.target".

// Clase simulada como abstracta
class Animal {
  constructor() {
    // Detectar si se intenta instanciar directamente
    if (new.target === Animal) {
      throw new Error("No puedes instanciar una clase abstracta.");
    }
  }

  // Método "abstracto" que obliga a ser implementado
  hacerSonido() {
    throw new Error("Debes implementar el método hacerSonido()");
  }
}

// Subclase que sí implementa el método abstracto
class Perro extends Animal {
  hacerSonido() {
    console.log("¡Guau!");
  }
}

// Subclase de ejemplo sin implementación (esto causaría error si no implementa hacerSonido)
class Gato extends Animal {
  hacerSonido() {
    console.log("¡Miau!");
  }
}

// Pruebas
const dog = new Perro();
dog.hacerSonido(); // "¡Guau!"

const cat = new Gato();
cat.hacerSonido(); // "¡Miau!"

// const a = new Animal(); // Error: No puedes instanciar una clase abstracta.

// NOTA: En TypeScript puedes definir clases abstractas "de verdad" con la palabra 'abstract'
// abstract class Animal { abstract hacerSonido(): void; }

// Fin del resumen. Mantente ágil. 🚀
