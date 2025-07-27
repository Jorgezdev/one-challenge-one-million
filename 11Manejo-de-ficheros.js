
// USO DE FICHEROS EN JAVASCRIPT (Node.js)
// ---------------------------------------
// En JavaScript, trabajar con archivos (ficheros) es posible utilizando el módulo 'fs' (File System) de Node.js.

const fs = require('fs');
const path = require('path');

// ---------------------------------------
// Crear un archivo con el nombre del usuario de GitHub y extensión .txt
// ---------------------------------------

const nombreArchivo = 'Jorgezdev.txt';
const rutaArchivo = path.join(__dirname, nombreArchivo);

// Escribir contenido en el archivo
fs.writeFileSync(nombreArchivo, 'Nombre: Jorge Zav\nEdad: 30\nLenguaje favorito: JavaScript');

// Leer e imprimir el contenido del archivo
const contenido = fs.readFileSync(nombreArchivo, 'utf-8');
console.log('Contenido del archivo:');
console.log(contenido);

// Eliminar el archivo
fs.unlinkSync(nombreArchivo);
console.log('Archivo eliminado con éxito.');

// ---------------------------------------
// DIFICULTAD EXTRA: Sistema de gestión de ventas
// ---------------------------------------

const ventasArchivo = 'ventas.txt';

// Función para añadir un producto
function añadirProducto(nombre, cantidad, precio) {
    const linea = `\n${nombre}, ${cantidad}, ${precio}`;
    fs.appendFileSync(ventasArchivo, linea);
}

// Función para consultar productos
function consultarProductos() {
    if (fs.existsSync(ventasArchivo)) {
        const datos = fs.readFileSync(ventasArchivo, 'utf-8');
        console.log('Productos:');
        console.log(datos);
    } else {
        console.log('No hay productos registrados.');
    }
}

// Función para calcular total de ventas
function calcularVentaTotal() {
    if (!fs.existsSync(ventasArchivo)) return 0;
    const lineas = fs.readFileSync(ventasArchivo, 'utf-8').trim().split('\n');
    let total = 0;
    lineas.forEach(linea => {
        const partes = linea.split(',').map(p => p.trim());
        const cantidad = parseInt(partes[1]);
        const precio = parseFloat(partes[2]);
        total += cantidad * precio;
    });
    console.log('Venta total:', total);
}

// Función para eliminar un producto por nombre
function eliminarProducto(nombre) {
    if (!fs.existsSync(ventasArchivo)) return;
    const lineas = fs.readFileSync(ventasArchivo, 'utf-8').trim().split('\n');
    const filtrado = lineas.filter(linea => !linea.startsWith(nombre));
    fs.writeFileSync(ventasArchivo, filtrado.join('\n'));
    console.log(`Producto "${nombre}" eliminado.`);
}

// Función para actualizar un producto
function actualizarProducto(nombre, nuevaCantidad, nuevoPrecio) {
    if (!fs.existsSync(ventasArchivo)) return;
    const lineas = fs.readFileSync(ventasArchivo, 'utf-8').trim().split('\n');
    const actualizadas = lineas.map(linea => {
        if (linea.startsWith(nombre)) {
            return `${nombre}, ${nuevaCantidad}, ${nuevoPrecio}`;
        }
        return linea;
    });
    fs.writeFileSync(ventasArchivo, actualizadas.join('\n'));
    console.log(`Producto "${nombre}" actualizado.`);
}

// Función para borrar el archivo y salir
function salir() {
    if (fs.existsSync(ventasArchivo)) {
        fs.unlinkSync(ventasArchivo);
        console.log('Archivo de ventas eliminado. ¡Hasta luego!');
    }
}

// DEMOSTRACIÓN BÁSICA
añadirProducto('Laptop', 2, 1500);
añadirProducto('Mouse', 10, 15);
consultarProductos();
calcularVentaTotal();
actualizarProducto('Mouse', 20, 14.5);
eliminarProducto('Laptop');
consultarProductos();
salir();
