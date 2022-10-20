console.log('working')

// Global Variables
let button = document.querySelector('#search-button')


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
        poetName.innerText = `By ${res[1].author}`

        let poemTitle = document.querySelector('#title')
        poemTitle.innerText = res[1].title

        // let numPoems = document.querySelector('#numPoems')
        // numPoems.innerText = `${res.length} poems available`

        let poem = document.querySelector('#poem')
        //poem.innerText = res[1].title
        
        for (let i = 0; i < res[1].lines.length; i++) {
            let poemLine = document.createElement('li')
            poem.appendChild(poemLine)
            //poemLine.innerText = res[1].lines[i]
            
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


// 1 attach Event to Button
button.addEventListener('click', getData)


// Poems stored in [lines] array . Each line of poem is an index in [lines]. Create a <li> for each index in the array [lines]. Just map() to new array? Or forEach()?