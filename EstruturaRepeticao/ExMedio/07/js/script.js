function inverterPalavra() {
    let palavra = document.getElementById("palavra").value;
    let resultado = document.getElementById("resultado");

    if (palavra === "") {
        resultado.innerHTML = "Por favor, digite uma palavra!";
        return;
    }

    let palavraInvertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    resultado.innerHTML = `Palavra invertida: ${palavraInvertida}`;
}