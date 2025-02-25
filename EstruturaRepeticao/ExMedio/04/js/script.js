let resultado = document.getElementById("resultado");
    let n1 = 0, n2 = 1, contador = 0;
    let fibonacci = "";

    while (contador < 10) {
    fibonacci += n1 + ", ";
    let proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
    contador++;
}

resultado.innerHTML = "Sequência de Fibonacci: " + fibonacci.slice(0, -2);