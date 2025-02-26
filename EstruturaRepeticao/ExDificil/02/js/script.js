let numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;
        let jogoAtivo = true;

        function verificarPalpite() {
            if (!jogoAtivo) return;

            let palpite = parseInt(document.getElementById("palpite").value);
            let resultado = document.getElementById("resultado");

            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                resultado.innerHTML = "Por favor, insira um número entre 1 e 100.";
                return;
            }

            tentativas++;

            if (palpite === numeroSecreto) {
                resultado.innerHTML = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
                jogoAtivo = false;
            } else if (palpite < numeroSecreto) {
                resultado.innerHTML = "📈 O número secreto é maior!";
            } else {
                resultado.innerHTML = "📉 O número secreto é menor!";
            }
        }

        function reiniciarJogo() {
            numeroSecreto = Math.floor(Math.random() * 100) + 1;
            tentativas = 0;
            jogoAtivo = true;
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("palpite").value = "";
        }