const inputCidade = document.getElementById('cidade')
const btnBuscar = document.getElementById('ObterTemperatura')
const pInfo = document.getElementById('informacao')

const apiKey = '84f3af184fe1591cca7c886d3acfd40d';

// vamos implementar a função que busca a temperatura no
// openweathermap passando o nome da cidade
async function fetchTemperatura() {
    const cidade = inputCidade.value
    
    try{
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
    
        const dados = await resposta.json();

        if(dados.cod === '404'){
            pInfo.textContent = 'Cidade não encontrada...'
        }
        else{
            const temperatura = dados.main.temp
            const descricao = dados.weather[0].description
            pInfo.textContent = `Tempo em ${cidade}: ${temperatura}°C, ${descricao}`
        }
    }
    
    catch(error){
        pInfo.textContent = 'Erro ao buscar uma temperatura.'
    }
}

btnBuscar.addEventListener('click', fetchTemperatura)