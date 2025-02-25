function encontrarMaior() {
    let entrada = document.getElementById("numeros").value;
    let resultado = document.getElementById("resultado");

    let numeros = entrada.split(",").map(num => parseFloat(num.trim()));

    if (numeros.length !== 5 || numeros.some(isNaN)) {
        resultado.innerHTML = "Por favor, insira exatamente 5 números válidos!";
        return;
    }

    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    resultado.innerHTML = `O maior número é: ${maior}`;
}