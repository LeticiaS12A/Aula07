const lstUsuarios = document.getElementById('listaUsuarios')

//function para buscar os usuarios
async function buscarUsuarios(){
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
        const usuarios = await resposta.json()
        
        //vamos usar o metodo map() para ler o nome de cada usuario e
        // criar o elemento li para este usuario
        const listaItens = usuarios.map(usuario => {
            const listaItem = document.createElement('li')
            listaItem.textContent = usuario.name
            return listaItem;
        });

        lstUsuarios.append(...listaItens)
    } 
    
    catch(error){
        lstUsuarios.textContent = 'Error ao buscar usuários'
    }
    
}


// chamada da function que busca usuários
buscarUsuarios();