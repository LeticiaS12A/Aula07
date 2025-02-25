const ulAutores = document.getElementById('autores')

fetch('https://randomuser.me/api/?results=5')
    .then((resp) => resp.json())
    .then(function(data){
        let autores = data.results;
        return autores.map(function(autor){
            let li = createnode('li')
            let img  = createnode('img')
            let span = createnode('span')
            img.src = autor.picture.medium
            span.innerHTML = `${autor.name.first} ${autor.name.last}`
            append(li, img)
            append(li, span)
            append(ulAutores, li)
        })
    })
    .catch(function(error){
        console.log(error)
    })

function createnode(element){
    return document.createElement(element)
}

function append(parent, el){
    return parent.appendChild(el)
}