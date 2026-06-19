function solicitarJSON(callback) {
    setTimeout(() => {
        callback();
    }, 3000); 
}

function reproducirAudio(callback) {
    setTimeout(() => {
        callback();
    }, 1000); 
}

function leerSensor(callback) {
    setTimeout(() => {
        callback();
    }, 500); 
}

console.log("--- Iniciando procesos asincronos ---");

solicitarJSON(() => console.log("Archivo JSON recibido.")); 
reproducirAudio(() => console.log("Audio finalizado."));
leerSensor(() => console.log("Datos del sensor listos.")); 