function gerarTabuada() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior

    if (numero === "") {
        resultado.innerHTML = "Por favor, digite um número!";
        return;
    }

    numero = parseInt(numero);
    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
    }
}