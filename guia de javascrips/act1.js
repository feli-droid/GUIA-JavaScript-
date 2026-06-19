function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación con: ${num1} y ${num2}`);
    operacionCallback(num1, num2);

function sumar(a, b) {
    console.log(`Resultado Suma: ${a + b}`); 
}

function restar(a, b) {
    console.log(`Resultado Resta: ${a - b}`);
}

function multiplicar(a, b) {
    console.log(`Resultado Multiplicación: ${a * b}`);
}
realizarOperacion(10, 5, sumar);
realizarOperacion(10, 5, restar);
realizarOperacion(10, 5, multiplicar);}