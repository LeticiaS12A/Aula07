function gerarPiramide() {
    let linhas = 5;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    for (let i = 1; i <= linhas; i++) {
        let espacos = " ".repeat(linhas - i);
        let asteriscos = "*".repeat(2 * i - 1);
        resultado.innerHTML += espacos + asteriscos + "\n";
    }
}