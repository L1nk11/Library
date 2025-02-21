const overlay = document.getElementById('overlay')
const addBook = document.getElementById('addBook')
const popup = document.getElementById('popup')

addBook.addEventListener('click', function(){
    overlay.style.display = 'block'
    popup.style.display = 'block'
})

overlay.addEventListener('click', function(){
    overlay.style.display = 'none'
    popup.style.display = 'none'
})

