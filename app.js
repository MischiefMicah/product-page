const $ = (arg) => {
    return document.querySelector(arg)
}

const openMenu = $('.menuIcon')
const closeMenu = $('.closeMenu')
const menu = $('.menu')
const shadow = $('.shadow')
const cartIcon = $('.cartIcon')
const cartMenu = $('.cartMenu')

openMenu.children[0].addEventListener('click', () => {
    menu.classList.remove('menuHidden')
    menu.classList.add('openMenu')
    shadow.classList.remove('bright')
    shadow.classList.remove('transition')
    shadow.classList.add('dark')
})

closeMenu.children[0].addEventListener('click', ()=> {
    menu.classList.remove('openMenu')
    menu.classList.add('menuHidden')
    shadow.classList.remove('dark')
    shadow.classList.add('transition')
    setTimeout(() => {
        shadow.classList.add('bright')
    }, 500)
})

shadow.addEventListener('click', () => {
    menu.classList.remove('openMenu')
    menu.classList.add('menuHidden')
    shadow.classList.remove('dark')
    shadow.classList.add('transition')
    setTimeout(() => {
        shadow.classList.add('bright')
    }, 500)
})

cartIcon.children[0].addEventListener('click', ()=> {
    cartMenu.classList.remove('cartHide')
    cartMenu.classList.add('cartShow')
})