let resultado = document.getElementById("resultado");

for (let i = 3; i <= 15; i += 3) {
    console.log(i); 
    resultado.innerHTML += i + "<br>";
}