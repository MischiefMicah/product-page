const $ = (arg) => {
    return document.querySelector(arg)
}

const openMenu = $('.menuIcon')
const closeMenu = $('.closeMenu')
const menu = $('.menu')
const shadow = $('.shadow')
const cartIcon = $('.cartIconWrap')
const cartMenu = $('.cartMenu')
const quant = $('.quant')
const decBtn = $('.decBtn')
const incBtn = $('.incBtn')
const addCart = $('.addCart')
const cartQuant = $('.cartQuant')

cartQuant.innerHTML != 0 ? cartQuant.classList.remove('cartQuantHide') : cartQuant.classList.add('cartQuantHide')

openMenu.children[0].addEventListener('click', () => {
    menu.classList.remove('menuHidden')
    menu.classList.add('openMenu')
    shadow.classList.remove('bright')
    shadow.classList.remove('shadTransition')
    shadow.classList.add('dark')
})

closeMenu.children[0].addEventListener('click', ()=> {
    menu.classList.remove('openMenu')
    menu.classList.add('menuHidden')
    shadow.classList.remove('dark')
    shadow.classList.add('shadTransition')
    setTimeout(() => {
        shadow.classList.add('bright')
    }, 500)
})

shadow.addEventListener('click', () => {
    menu.classList.remove('openMenu')
    menu.classList.add('menuHidden')
    shadow.classList.remove('dark')
    shadow.classList.add('shadTransition')
    setTimeout(() => {
        shadow.classList.add('bright')
    }, 500)
})

cartIcon.addEventListener('click', ()=> {
    if (cartMenu.classList.contains('cartShow')) {
        cartMenu.classList.add('cartTransition')
        setTimeout(()=> {
            cartMenu.classList.remove('cartShow')
            cartMenu.classList.add('cartHide')
        }, 500)
    } else {
    cartMenu.classList.remove('cartHide')
    cartMenu.classList.remove('cartTransition')
    cartMenu.classList.add('cartShow')
    }
})

decBtn.addEventListener('click', ()=>{
    quant.innerHTML > 0 ? quant.innerHTML -= 1 : quant.innerHTML = 0
})

incBtn.addEventListener('click', ()=>{
    let tempQuant = parseInt(quant.innerHTML)
    tempQuant += 1
    quant.innerHTML = tempQuant
})

addCart.addEventListener('click',()=> {
    let tempCartQuant = parseInt(cartQuant.innerHTML)
    let tempQuant = parseInt(quant.innerHTML)
    cartQuant.innerHTML = tempCartQuant + tempQuant
    cartQuant.innerHTML != 0 ? cartQuant.classList.remove('cartQuantHide') : cartQuant.classList.add('cartQuantHide')
})
