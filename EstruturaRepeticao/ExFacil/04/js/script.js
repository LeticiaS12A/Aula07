let soma = 0;

for (let i = 1; i <= 5; i++) {
    soma += i;
}


console.log("Soma:", soma);
document.getElementById("resultado").innerHTML = "A soma dos números de 1 a 5 é: " + soma;