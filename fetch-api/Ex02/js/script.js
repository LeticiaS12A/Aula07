const pFatos = document.getElementById('fatos')

const bntTrocarFato = document.getElementById('trocarFato')

// vamos consumir o web service catfat.ninja com uma função assicrona
async function fetchFatos(params) {
    try{
        const resposta = await fetch('https://catfact.ninja/fact')
        const dados = await resposta.json()
        pFatos.textContent = dados.fact;
    } 
    
    catch(error){
        pFatos.textContent = 'Error ao buscar um fato!'
        console.log('Erro ao buscar um fato!');
    }
}

bntTrocarFato.addEventListener('click', fetchFatos);

fetchFatos();