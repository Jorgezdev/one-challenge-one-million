📌 Cómo usarlo:
Crea una carpeta y dentro pon dos archivos:

funciones.js (el de la lógica)

funciones.test.js (el de las pruebas)

Instala Jest:

bash
Copiar
Editar
npm init -y
npm install --save-dev jest
En tu package.json, agrega:

json
Copiar
Editar
"scripts": {
  "test": "jest"
}
Ejecuta:

bash
Copiar
Editar
npm test
💡 Explicación rápida en comentarios dentro del código:
sumar(a, b): Función simple para sumar dos números.

expect(...).toBe(...): Verifica valores primitivos (números, strings exactos).

expect(...).toHaveProperty(...): Verifica que un objeto tenga una clave.

expect(...).toEqual(expect.arrayContaining([...])): Verifica que un array contenga ciertos valores, sin importar el orden.

