function simularDescarga(nombreArchivo, callback) { 
    console.log(`Iniciando la descarga del archivo: ${nombreArchivo}...`); 
    
    setTimeout(() => {
        console.log(`La descarga de ${nombreArchivo} ha finalizado.`); 
        callback(); 
    }, 4000); 
}
simularDescarga("manual.pdf", () => { 
    console.log("Archivo listo para abrir."); 
}); 