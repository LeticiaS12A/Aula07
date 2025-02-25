function calcularFatorial() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior

    if (numero === "" || numero < 0) {
        resultado.innerHTML = "Por favor, digite um número inteiro não negativo!";
        return;
    }

    numero = parseInt(numero);
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    resultado.innerHTML = `O fatorial de ${numero} é: ${fatorial}`;
}