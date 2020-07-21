const introContainer = [...document.querySelectorAll('.intro-container')];
const dots = [...document.querySelectorAll('.intro-dot')];
const burgerButton = document.querySelector('.burger');
const navbarUL = document.querySelector('.navbar-ul');
const navLinks = [...document.querySelectorAll('.nav-links')];
const moreInfoOverlay = document.querySelector('.more-info-overlay');
const moreInfoContainer = document.querySelector('.more-info-container');
const btnClose = document.querySelector('.btn-close');
const btnMoreInfo = document.querySelector('.btn-more');
const blogTitles = [...document.querySelectorAll('.blog-info h4')];
const blogInfos = [...document.querySelectorAll('.blog-info p')];
const btnCloseGallery = document.querySelector('.gallery-close');
const galleryDetails = document.querySelector('.gallery-details');
const galleryOverlay = document.querySelector('.gallery-overlay');
const choosenGalleryImg = document.querySelector('.gallery-overlay-container img');
const overlay = document.querySelector('.gallery-overlay-container');
const galleryImgSrc = ['m1', 'g2', 'g3', 'm4', 'm5', 'm6', 'm3', 'm2'];

var slideIndex = 1;
var galleryIndex = 0;

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    showSlides(slideIndex);
    burgerActive();
    displayInfoContainer()
    closeInfoContainer();
    resizeScreen();
    autoShowSlides();
    galleryClose();
}

function autoShowSlides() {
    setInterval(() => {
        showSlides(++slideIndex);
    }, 5000);
}

function plusSlides(n, event) {
    if (event.classList.contains('gallery-arrow')) {
        showGallery(galleryIndex += n);
    } else if (event.classList.contains('intro-arrow')) {
        showSlides(slideIndex += n);
    }
}

function currentSlide(n, event) {
    if (event.classList.contains('gallery-img')) {
        showGallery(galleryIndex = n);
    } else if (event.classList.contains('intro-dot')) {
        showSlides(slideIndex = n);
    }
}

function showSlides(n) {
    if (n > introContainer.length) slideIndex = 1;
    if (n < 1) slideIndex = introContainer.length;
    for (let i = 0; i < introContainer.length; i++) {
        introContainer[i].classList.remove('visible');
        dots[i].classList.remove('here');
    }

    introContainer[slideIndex - 1].style.setProperty('--img', `url(../images/${slideIndex}.jpg)`);
    introContainer[slideIndex - 1].classList.add('visible');
    dots[slideIndex - 1].classList.add('here');
}

function burgerActive() {
    burgerButton.addEventListener('click', () => {
        navbarUL.classList.toggle('burger-active');
    })
}

function displayInfoContainer() {
    btnMoreInfo.addEventListener('click', () => {
        moreInfoOverlay.classList.add('display');
        moreInfoContainer.classList.remove('close');
    })

    blogTitles.forEach(title => {
        title.addEventListener('click', () => {
            moreInfoOverlay.classList.add('display');
            moreInfoContainer.classList.remove('close');
        })
    })

    blogInfos.forEach(blog => {
        blog.addEventListener('click', () => {
            moreInfoOverlay.classList.add('display');
            moreInfoContainer.classList.remove('close');
        })
    })
}

function closeInfoContainer() {
    btnClose.addEventListener('click', () => {
        moreInfoContainer.classList.add('close');
        setTimeout(() => {
            moreInfoOverlay.classList.remove('display');
        }, 500);
    })
}

function galleryClose() {
    galleryOverlay.addEventListener('click', () => {
        galleryDetails.classList.remove('visible');
    })
    btnCloseGallery.addEventListener('click', () => {
        galleryDetails.classList.remove('visible');
    })
}


function resizeScreen() {
    window.addEventListener("resize", () => {
        if (document.body.clientWidth) {
            navbarUL.classList.remove('burger-active');
        }
    })
}


function showGallery(n) {
    if (n < 0) galleryIndex = 0;
    if (n >= galleryImgSrc.length) galleryIndex = galleryImgSrc.length - 1;
    var src = `images/${galleryImgSrc[galleryIndex]}.jpg`;
    galleryDetails.classList.add('visible');
    choosenGalleryImg.setAttribute('src', src);
}
