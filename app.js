const $ = (arg) => {
    return document.querySelector(arg)
}

const shoeApp = {
    menuIcon: $('.menuIcon'),
    closeMenuIcon: $('.closeMenuIcon'),
    menu: $('.menu'),
    shadow: $('.shadow'),
    cartIcon: $('.cartIconWrap'),
    cartMenu: $('.cartMenu'),
    quant: $('.quant'),
    decBtn: $('.decBtn'),
    incBtn: $('.incBtn'),
    addCartBtn: $('.addCartBtn'),
    cartQuant: $('.cartQuant'),
    itemWrap: $('.itemWrap'),
    checkout: $('.checkout'),
    item: $('.item'),
    slides: $('.slides'),
    slideBtns: document.querySelectorAll('.slideBtn'),
    slideSmBtns: document.querySelectorAll('.slideSmBtn'),
    lbSlides: document.querySelector('.lbSlides'),
    lbCurrSlide: document.querySelector('.lbCurrSlide'),
    lbSlideBtns: document.querySelectorAll('.lbSlideBtn'),
    lbCloseBtn: document.querySelector('.lbCloseBtn').children[0],
    currSlide: $('.currSlide'),
    images: {
        full:[
            'images/image-product-1.jpg',
            'images/image-product-2.jpg',
            'images/image-product-3.jpg',
            'images/image-product-4.jpg'
        ],
        thumbnails:[
            'images/image-product-1-thumbnail.jpg',
            'images/image-product-2-thumbnail.jpg',
            'images/image-product-3-thumbnail.jpg',
            'images/image-product-4-thumbnail.jpg'
        ]
    },
    openMenu: function() {
        shoeApp.menu.classList.remove('menuHidden')
        shoeApp.menu.classList.add('openMenu')
        shoeApp.shadow.classList.remove('bright')
        shoeApp.shadow.classList.remove('shadTransition')
        shoeApp.shadow.classList.add('dark')
    },
    closeMenu: function() {
        window.innerWidth > 450 ? shoeApp.lbClose() : undefined
        shoeApp.menu.classList.remove('openMenu')
        shoeApp.menu.classList.add('menuHidden')
        shoeApp.shadow.classList.remove('dark')
        shoeApp.shadow.classList.add('shadTransition')
        setTimeout(() => {
            shoeApp.shadow.classList.add('bright')
        }, 500)
    },
    openCart: function() {
        if (shoeApp.cartMenu.classList.contains('cartShow')) {
            shoeApp.closeCart()
        } else {
            shoeApp.cartMenu.classList.remove('cartHide')
            shoeApp.cartMenu.classList.remove('cartTransition')
            shoeApp.cartMenu.classList.add('cartShow')
    }
    },
    closeCart: function() {
        shoeApp.cartMenu.classList.add('cartTransition')
        setTimeout(()=> {
            shoeApp.cartMenu.classList.remove('cartShow')
            shoeApp.cartMenu.classList.add('cartHide')
        }, 500)

    },
    decQuant: function() {
        shoeApp.quant.innerHTML > 0 ? shoeApp.quant.innerHTML -= 1 : shoeApp.quant.innerHTML = 0
    },
    incQuant: function() {
        let tempQuant = parseInt(shoeApp.quant.innerHTML)
        tempQuant += 1
        shoeApp.quant.innerHTML = tempQuant
    },
    addItem: function() {
        let tempCartQuant = parseInt(shoeApp.cartQuant.innerHTML)
        let tempQuant = parseInt(shoeApp.quant.innerHTML)
        shoeApp.cartQuant.innerHTML = tempCartQuant + tempQuant
        if (shoeApp.cartQuant.innerHTML != 0) {
            shoeApp.cartQuant.classList.remove('cartQuantHide')
            shoeApp.itemWrap.children[0].classList.add('hideItem')
            shoeApp.item.classList.remove('hideItem')
            shoeApp.checkout.classList.remove('hideItem')
        }
        shoeApp.item.children[1].children[1].innerHTML = `$125.00 x ${shoeApp.cartQuant.innerHTML} <span>$${(shoeApp.cartQuant.innerHTML * 125.00).toFixed(2)}</span>`
    },
    delItem: function() {
        shoeApp.itemWrap.children[0].classList.remove('hideItem')
        shoeApp.item.classList.add('hideItem')
        shoeApp.checkout.classList.add('hideItem')
        shoeApp.cartQuant.classList.add('cartQuantHide')
        shoeApp.cartQuant.innerHTML = 0
    },
    changeSlideMobile: function(e) {
        if (e.currentTarget.classList.contains('slideNext')) {
            if (parseInt(shoeApp.currSlide.id) >= 0 && parseInt(shoeApp.currSlide.id) < 3) {
                let tempId = parseInt(shoeApp.currSlide.id)
                shoeApp.currSlide.id = tempId + 1
                shoeApp.currSlide.src = shoeApp.images.full[`${shoeApp.currSlide.id}`]
            } else if (shoeApp.currSlide.id == '3') {
                shoeApp.currSlide.id = '0'
                shoeApp.currSlide.src = shoeApp.images.full[`${shoeApp.currSlide.id}`]
            }
        }
        if (e.currentTarget.classList.contains('slidePrev')) {
            if (parseInt(shoeApp.currSlide.id) <= 3 && parseInt(shoeApp.currSlide.id) > 0) {
                let tempId = parseInt(shoeApp.currSlide.id)
                shoeApp.currSlide.id = tempId - 1
                shoeApp.currSlide.src = shoeApp.images.full[`${shoeApp.currSlide.id}`]
            } else if (shoeApp.currSlide.id == '0') {
                shoeApp.currSlide.id = '3'
                shoeApp.currSlide.src = shoeApp.images.full[`${shoeApp.currSlide.id}`]
            }
        }
    },
    changeSlideDesktop: function(e){
        if (e.currentTarget.classList.contains('lbSlideBtn')) {
            for (i=0;i < shoeApp.lbSlideBtns.length; i++) {
                shoeApp.lbSlideBtns[i].classList.remove('selectSlide')
                shoeApp.lbSlideBtns[i].children[1].classList.remove('selectSlideImg')
            }
            e.currentTarget.classList.add('selectSlide')
            e.currentTarget.children[1].classList.add('selectSlideImg')
            shoeApp.lbCurrSlide.src = `images/image-product-${e.currentTarget.id}.jpg`
        } else {
            for (i=0;i < shoeApp.slideSmBtns.length; i++) {
                shoeApp.slideSmBtns[i].classList.remove('selectSlide')
                shoeApp.slideSmBtns[i].children[0].classList.remove('selectSlideImg')
            }
            e.currentTarget.classList.add('selectSlide')
            e.currentTarget.children[0].classList.add('selectSlideImg')
            shoeApp.currSlide.src = `images/image-product-${e.currentTarget.id}.jpg`
        }
    },
    lbOpen: function(){
        if(window.innerWidth > 450) {
            shoeApp.shadow.classList.remove('bright')
            shoeApp.shadow.classList.remove('shadTransition')
            shoeApp.shadow.classList.add('dark')
            shoeApp.lbCurrSlide.src = shoeApp.images.full[0]
            shoeApp.lbSlideBtns[0].classList.add('selectSlide')
            shoeApp.lbSlideBtns[0].children[1].classList.add('selectSlideImg')
            shoeApp.lbSlides.classList.remove('lbHide')
            shoeApp.closeCart()
        }
    },
    lbClose: function(){
        shoeApp.lbSlides.classList.add('lbHide')
        shoeApp.shadow.classList.remove('dark')
        shoeApp.shadow.classList.add('shadTransition')
        shoeApp.shadow.classList.add('bright')
        for (i=0;i < shoeApp.lbSlideBtns.length; i++) {
            shoeApp.lbSlideBtns[i].classList.remove('selectSlide')
            shoeApp.lbSlideBtns[i].children[1].classList.remove('selectSlideImg')
        }

    }
}

shoeApp.cartQuant.innerHTML != 0 ? shoeApp.cartQuant.classList.remove('cartQuantHide') : shoeApp.cartQuant.classList.add('cartQuantHide')

shoeApp.menuIcon.children[0].addEventListener('click', shoeApp.openMenu)
shoeApp.closeMenuIcon.children[0].addEventListener('click', shoeApp.closeMenu)
shoeApp.shadow.addEventListener('click', shoeApp.closeMenu)

shoeApp.cartIcon.addEventListener('click', shoeApp.openCart)

shoeApp.decBtn.addEventListener('click', shoeApp.decQuant)
shoeApp.incBtn.addEventListener('click', shoeApp.incQuant)

shoeApp.addCartBtn.addEventListener('click', shoeApp.addItem)
shoeApp.item.children[2].addEventListener('click', shoeApp.delItem)

shoeApp.slideBtns.forEach((btn) => {
    btn.addEventListener('click', shoeApp.changeSlideMobile)
})

shoeApp.slideSmBtns.forEach((btn) => {
    btn.addEventListener('click', shoeApp.changeSlideDesktop)
})

shoeApp.currSlide.addEventListener('click', shoeApp.lbOpen)
shoeApp.lbCloseBtn.addEventListener('click', shoeApp.lbClose)