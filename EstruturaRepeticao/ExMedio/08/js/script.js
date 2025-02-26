function ehPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // Não é primo
        }
    }
    return true; // É primo
}

let resultado = document.getElementById("resultado");
let primos = "";

for (let num = 1; num <= 20; num++) {
    if (ehPrimo(num)) {
        primos += num + ", ";
    }
}

resultado.innerHTML = "Números primos entre 1 e 20: " + primos.slice(0, -2);