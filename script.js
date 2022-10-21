console.log('working')

let button = document.querySelector('#search-button')


async function getData (event) {
    event.preventDefault()
    let textInput = document.querySelector('#input-bar').value

    fetch(`https://poetrydb.org/author/${textInput}`)
    .then(res => {
        return res.json()
    })
    .then(res =>{
        console.log('success!', res)
        
        let poemTitle = document.querySelector('#title')
        poemTitle.innerText = res[1].title

        let poetName = document.querySelector('#poet-name')
        poetName.innerText = `By ${res[1].author}`

        let poem = document.querySelector('#poem')
        
        for (let i = 0; i < res[1].lines.length; i++) {
            let poemLine = document.createElement('div')
            poem.appendChild(poemLine)
            if (res[1].lines[i] !== "") {
                poemLine.innerText = res[1].lines[i]
            } else {
                 poemLine.innerText = "-"
            } 
            // Why won't this display unless i put a character? Not even a space???
           
            console.log(res[1].lines[i])
        }
        
              
    })
    .catch(err =>{
        console.log('error!', err)
    })
}


button.addEventListener('click', getData)
