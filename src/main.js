import './scss/main.scss'

const button = document.getElementById('socials-btn')
const menu = document.getElementById('menu')

button.addEventListener('click', () => {
    if (menu.style.display == 'flex') {
        menu.style.display = 'none' 
        button.style.background = '#ecf2f8'
        button.style.color = '#6d7f97'
    } else {
        menu.style.display = 'flex'
        button.style.background = '#6d7f97'
        button.style.color = '#ecf2f8'
    }

})

