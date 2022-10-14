console.log('working')

let button = document.querySelector('#searchButton')


async function getData (event) {
    event.preventDefault()
    let textInput = document.querySelector('#inputBar').value

    fetch(`https://poetrydb.org/author/${textInput}`)
    .then(res => {
        return res.json()
    })
    .then(res =>{
        console.log('success!', res)
        let poetName = document.querySelector('#poetName')
        poetName.innerText = res[1].author

        let poemTitle = document.querySelector('#title')
        poemTitle.innerText = res[1].title

        let poem = document.querySelector('#poem')
        poem.innerText = res[1].lines

        let numPoems = document.querySelector('#numPoems')
        numPoems.innerText = `${res.length} poems available`
    })
    .catch(err =>{
        console.log('error!', err)
    })
}


// 1 attach Event to Button
button.addEventListener('click', getData)