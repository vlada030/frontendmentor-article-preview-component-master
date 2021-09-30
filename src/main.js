import './scss/main.scss'

const button = document.getElementById('socials-btn')
const wrapper = document.getElementById('container')
const user = document.getElementById('user')
const menu = document.getElementById('menu')
const text = document.getElementById('text')

button.addEventListener('click', () => {
    // user.style.display = 'none';
    // menu.style.display = 'flex';
    wrapper.classList.add('card-footer--active')
    text.classList.add('card-text--active')
    menu.style.display = 'flex'
    user.style.display = 'none'

})

