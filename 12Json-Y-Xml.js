
// ===============================================================
// ✅ EXPLICACIÓN COMPLETA: JSON, XML y manipulación de archivos
// ===============================================================

// ---------------------------------------------------------------
// 🔸 ¿Qué es JSON?
// ---------------------------------------------------------------
// JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos.
// Muy usado en APIs y almacenamiento porque es fácil de leer y escribir.
// Ejemplo:
/*
{
  "nombre": "Jorge Zavala",
  "edad": 31,
  "lenguajes": ["JavaScript", "Python", "C++"]
}
*/
// En JS usamos JSON.stringify para convertir objetos a texto JSON
// y JSON.parse para convertir texto JSON a objetos JS.

// ---------------------------------------------------------------
// 🔸 ¿Qué es XML?
// ---------------------------------------------------------------
// XML (eXtensible Markup Language) es un formato estructurado como HTML,
// usado para almacenar y transportar datos con etiquetas personalizadas.
// Ejemplo:
/*
<persona>
  <nombre>Jorge Zavala</nombre>
  <edad>31</edad>
  <lenguajes>
    <lenguaje>JavaScript</lenguaje>
    <lenguaje>Python</lenguaje>
    <lenguaje>C++</lenguaje>
  </lenguajes>
</persona>
*/
// Es más verboso que JSON, pero muy usado en entornos corporativos y legacy.

// ===============================================================
// 🔧 DESAFÍO: Crear, mostrar y borrar archivos JSON y XML
// ===============================================================

const fs = require('fs');
const xml2js = require('xml2js'); // Asegúrate de instalar: npm install xml2js

// Datos de ejemplo
const persona = {
  nombre: 'Jorge Zavala',
  edad: 31,
  nacimiento: '1993-04-10',
  lenguajes: ['JavaScript', 'Python', 'C++']
};

// ---------------------------------------------------------------
// 1️⃣ Crear archivo JSON
// ---------------------------------------------------------------
const jsonData = JSON.stringify(persona, null, 2);
fs.writeFileSync('persona.json', jsonData);
console.log('✅ Archivo JSON creado');

// ---------------------------------------------------------------
// 2️⃣ Crear archivo XML
// ---------------------------------------------------------------
const builder = new xml2js.Builder();
const xmlData = builder.buildObject({ persona });
fs.writeFileSync('persona.xml', xmlData);
console.log('✅ Archivo XML creado');

// ---------------------------------------------------------------
// 3️⃣ Mostrar contenido de los archivos
// ---------------------------------------------------------------
const leerJson = fs.readFileSync('persona.json', 'utf-8');
console.log('\n📄 Contenido JSON:');
console.log(leerJson);

const leerXml = fs.readFileSync('persona.xml', 'utf-8');
console.log('\n📄 Contenido XML:');
console.log(leerXml);

// ---------------------------------------------------------------
// 4️⃣ DIFICULTAD EXTRA: Leer ambos archivos y crear clase Persona
// ---------------------------------------------------------------
class Persona {
  constructor(nombre, edad, nacimiento, lenguajes) {
    this.nombre = nombre;
    this.edad = edad;
    this.nacimiento = nacimiento;
    this.lenguajes = lenguajes;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y sé: ${this.lenguajes.join(', ')}`);
  }
}

// Desde JSON
const datosDesdeJson = JSON.parse(leerJson);
const personaJson = new Persona(
  datosDesdeJson.nombre,
  datosDesdeJson.edad,
  datosDesdeJson.nacimiento,
  datosDesdeJson.lenguajes
);

console.log('\n🤖 Persona desde JSON:');
personaJson.saludar();

// Desde XML
xml2js.parseString(leerXml, (err, result) => {
  if (err) throw err;
  const datos = result.persona;
  const personaXml = new Persona(
    datos.nombre[0],
    parseInt(datos.edad[0]),
    datos.nacimiento[0],
    datos.lenguajes[0].lenguaje
  );

  console.log('\n🤖 Persona desde XML:');
  personaXml.saludar();

  // ---------------------------------------------------------------
  // 5️⃣ Borrar archivos
  // ---------------------------------------------------------------
  fs.unlinkSync('persona.json');
  fs.unlinkSync('persona.xml');
  console.log('\n🗑️ Archivos borrados');
});
