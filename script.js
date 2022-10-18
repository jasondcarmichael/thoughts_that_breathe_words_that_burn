console.log('working')

// Global Variables
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

        // let poem = document.querySelector('#poem')
        // poem.innerText = res[1].lines
        // this code is woking to display poem as <p>

        let numPoems = document.querySelector('#numPoems')
        numPoems.innerText = `${res.length} poems available`

        let poem = document.querySelector('#poem')
        poem.innerText = res[1].title
        // the above code works

        // const addLine = res[1].lines.forEach((x) => {
            
        // })

        
        for (let i = 0; i < res[1].lines.length; i++) {
            // let poem = document.querySelector('#poem')
            // poem.innerText = res[1].title
            let poemLine = document.createElement('li')
            poem.appendChild(poemLine)
            poemLine.innerText = res[1].lines[i]
            // if (res[1].lines[i] == "") {
            //     poem.innerText = " "
            // } else {
            //     poemLine.innerText = res[1].lines[i]
            // }
                
            


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