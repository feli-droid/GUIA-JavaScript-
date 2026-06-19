function tareaNoBloqueante(callback) {
    console.log("Iniciando tarea no bloqueante...");
    setTimeout(function() {
        console.log("Tarea completada.");
        callback(); 
    }, 2000); 
}

console.log("Inicio del programa."); 
tareaNoBloqueante(function() {
  
});
console.log("Continuando después de la tarea.");
console.log("Fin del programa.");