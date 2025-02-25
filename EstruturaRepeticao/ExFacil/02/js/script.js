let resultado = document.getElementById("resultado")

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
    resultado.innerHTML += i + "<br>";
}