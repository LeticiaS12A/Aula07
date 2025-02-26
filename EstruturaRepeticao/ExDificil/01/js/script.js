function encontrarArmstrong() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior
    let numerosArmstrong = [];

    for (let num = 100; num < 1000; num++) {
        let soma = 0;
        let numeroString = num.toString();

        for (let i = 0; i < numeroString.length; i++) {
            let digito = parseInt(numeroString[i]);
            soma += Math.pow(digito, 3);
        }

        if (soma === num) {
            numerosArmstrong.push(num);
        }
    }

    resultado.innerHTML = `Números de Armstrong: ${numerosArmstrong.join(", ")}`;
}