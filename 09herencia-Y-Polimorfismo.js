// ---------------------------------------------
// HERENCIA Y POLIMORFISMO EN JAVASCRIPT
// ---------------------------------------------

// HERENCIA:
// Es un mecanismo que permite a una clase (llamada subclase o clase hija) heredar propiedades y métodos de otra clase (superclase o clase padre).
// Esto permite reutilizar código y establecer relaciones jerárquicas entre clases.

// POLIMORFISMO:
// Significa "muchas formas". Permite que una misma función o método se comporte de diferentes maneras según el objeto que la llame.
// En JavaScript, esto se puede lograr mediante la sobreescritura (override) de métodos en clases hijas.

// Definimos una clase base llamada 'Animal'
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(`${this.nombre} hace un ruido.`);
    }
}

// La clase 'Perro' hereda de 'Animal'
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la clase padre (Animal)
        this.raza = raza;
    }

    // Sobrescribimos el método hablar -> Ejemplo de POLIMORFISMO
    hablar() {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }
}

// Otra clase que también hereda de Animal
class Gato extends Animal {
    hablar() {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }
}

// Probamos herencia y polimorfismo
const miPerro = new Perro("Firulais", "Labrador");
const miGato = new Gato("Michi");

miPerro.hablar(); // Firulais dice: ¡Guau!
miGato.hablar();  // Michi dice: ¡Miau!

// Aunque ambas instancias usan el método 'hablar', se comportan de forma distinta según la clase: eso es polimorfismo.
