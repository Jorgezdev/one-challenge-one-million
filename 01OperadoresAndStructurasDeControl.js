// Operadores y Estructuras de control

let Saludo = "Esta es mi primera variable String";


let operadoresAritmeticos = [
    "- Resta", 
    "* Multiplicación", 
    "+ Suma", 
    "/ División", 
    "% Modulo", 
    "** Exponenciación", 
    "++ Incremento", 
    "-- Decremento"
] ;


let operadoresDeAsignacion = [
    "= Igual",
    "+= Asignación con suma, (X += Y  es equivalente x = x + y)",
    "-= Asignación con resta",
    "*= Asignación con multiplicación",
    "/= Asignación con división",
    "%= Asignación con modulo",
    "**= Asignación con exponenciación",
];


let operadoresDeComparacion = [
//Se usan para comparar valores.
    
    "==  Igualdad (compara valores, pero no tipos)",
    "===  Estrictamente igual (compara valores y tipos)",
    "!=  Desigualdad",
    "!==  Desigualdad estricta",
    ">  Mayor que",
    "<  Menor que",
    ">=  Mayor o igual que",
    "<=  Menor o igual que",
];


let operadoresLogicos = [
    //Se usan para combinar expresiones booleanas.
    
   " && - AND lógico ",
   " || - OR lógico ",
   " ! - NOT lógico ",
];


let operadoresBitaBit = [
   //Se aplican a los bits de los números.
    
    "& → AND bit a bit ",
    "| → OR bit a bit",
    "^ → XOR bit a bit",
    "~ → NOT bit a bit",
    "<< → Desplazamiento a la izquierda",
    ">> → Desplazamiento a la derecha",
    ">>> → Desplazamiento a la derecha sin signo",

];


let operadoresDeTipo = [
    // Se usan para verificar tipos de datos.
    
   " typeof → Devuelve el tipo de un valor (typeof hola devuelve string(aqui borre comillas para guardar sintaxtix))",
   " instanceof → Verifica si un objeto es una instancia de una clase"

];   
   
let operadorDeCondicionalTernario = [
    condición ? valor_si_verdadero : valor_si_falso
   // Ejemplo:
    

    //let edad = 18;
    //let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
    //console.log(mensaje);
   
];


let operadorDeEncadenamientoOpcional = [
//    ?. → Evita errores al acceder a propiedades de objetos que pueden ser null o undefined.
//    Ejemplo:
    

//    let usuario = null;
//    console.log(usuario?.nombre); // No da error, devuelve undefined

];

    
let operadorDeFusionNula = [
//    ?? → Devuelve el primer valor que no sea null o undefined.
//    Ejemplo:
    

//    let nombre = null;
//    let nombreDefecto = "Invitado";
//    console.log(nombre ?? nombreDefecto); // "Invitado"
    
];
    
let OperadoresDeComaYDeGrupo = [
//    , → Permite evaluar múltiples expresiones en una sola línea.
//    () → Agrupación de expresiones para cambiar el orden de evaluación.
//    Ejemplo:
    
//    let x = (1, 2, 3)// x será 3

];