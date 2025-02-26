function contarVogais() {
    // Obtém a palavra inserida pelo usuário
    let palavra = document.getElementById("inputPalavra").value;

    // Inicializa uma variável para contar as vogais
    let contadorVogais = 0;

    // Converte a palavra para minúscula para garantir que a comparação seja insensível a maiúsculas/minúsculas
    palavra = palavra.toLowerCase();

    // Limpa o resultado anterior
    document.getElementById("resultado").textContent = "";

    // Loop para percorrer cada caractere da palavra
    for (let i = 0; i < palavra.length; i++) {
        // Verifica se o caractere atual é uma vogal
        if ('aeiou'.includes(palavra[i])) {
            // Se for uma vogal, incrementa o contador
            contadorVogais++;
        }
    }

    // Exibe o total de vogais na palavra
    document.getElementById("resultado").textContent = `Total de vogais na palavra: ${contadorVogais}`;
}