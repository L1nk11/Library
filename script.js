// book constructor

class Book {
    constructor(tittle, author, pages, isRead) {
        this.title = tittle
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

// Library



// variables | references | buttons

const Library = []

const addBookButton = document.getElementById('addBook')
const overlay = document.getElementById('overlay')
const popUp = document.getElementById('popup')
const bookForm = document.getElementById('bookForm')
const sheet = document.getElementById('sheet')

addBookButton.addEventListener('click', function() {
    overlay.style.display = 'block'
    popup.style.display = 'block'
})

overlay.addEventListener('click', function(){
    overlay.style.display = 'none'
    popup.style.display = 'none'
})

// add book

function receiveBookInput() {
    const tittle = document.getElementById('tittle').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    return new Book(tittle, author, pages, read)
}

bookForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const newBook = receiveBookInput()

    Library.push(newBook)
    overlay.style.display = 'none'
    popup.style.display = 'none'
    bookForm.reset()

    // console.log(Library)

    updateList()
})

// create function to add new cell

function updateList() {
    // remove all elements except the last one

    while (sheet.children.length > 1) {
        sheet.removeChild(sheet.lastChild)
    }

    Library.forEach((Object, index) =>{
        const cell = document.createElement('div')
        cell.classList.add('cell')

        const tittle = document.createElement('div')
        tittle.classList.add('tittle')
        tittle.textContent = Object.title

        const author = document.createElement('div')
        author.classList.add('author')
        author.textContent = Object.author

        const nPages = document.createElement('div')
        nPages.classList.add('number-of-pages')
        nPages.textContent = Object.pages

        const read = document.createElement('div')
        
        if (Object.isRead == true) {
            read.classList.add('is-read')
            read.textContent = "it's read"
        } else {
            read.classList.add('is-not-read')
            read.textContent = "it's not read"
        }

        read.addEventListener('click', () => {
            if (Object.isRead == true) {
                Object.isRead = false
                read.classList.replace('is-read', 'is-not-read')
            } else {
                Object.isRead = true
                read.classList.replace('is-not-read', 'is-read')
            }
            
            updateList()
        })

        const remove = document.createElement('div')
        remove.classList.add('remove')
        remove.textContent = 'Delete'
        
        remove.addEventListener('click', () => {
            Library.splice(index, 1)
            updateList()
        })
        
        cell.appendChild(tittle)
        cell.appendChild(author)
        cell.appendChild(nPages)
        cell.appendChild(read)
        cell.appendChild(remove)
        sheet.appendChild(cell)
    })
}

updateList()