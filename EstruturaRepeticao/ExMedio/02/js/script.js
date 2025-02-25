let soma = 0;

for (let i = 1; i <= 100; i += 2) {
    soma += i;
}

console.log("Soma dos ímpares:", soma);
document.getElementById("resultado").innerHTML = "A soma dos números ímpares de 1 a 100 é: " + soma;