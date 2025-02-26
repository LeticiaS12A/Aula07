function calcularMedia() {
    let entrada = document.getElementById("notas").value;
    let resultado = document.getElementById("resultado");

    let notas = entrada.split(",").map(num => parseFloat(num.trim()));

    if (notas.length !== 3 || notas.some(isNaN)) {
        resultado.innerHTML = "Por favor, insira exatamente 3 notas válidas!";
        return;
    }

    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;
    resultado.innerHTML = `A média das notas é: ${media.toFixed(2)}`;
}