const introContainer = [...document.querySelectorAll('.intro-container')];
const dots = [...document.querySelectorAll('.intro-dot')];
const burgerButton = document.querySelector('.burger');
const navbarUL = document.querySelector('.navbar-ul');
const navLinks = [...document.querySelectorAll('.nav-links')];
const moreInfoContainer = document.querySelector('.more-info-overlay');
const moreInfoInsideContainer = document.querySelector('.more-info-container');
const btnClose = document.querySelector('.btn-close');
const btnMoreInfo = document.querySelector('.btn-more');
const owlPages = [...document.querySelectorAll('.owl-page')];
const owlRowOne = document.querySelector('.owl-row-one');
const owlRowTwo = document.querySelector('.owl-row-two');

var slideIndex = 1;
var owlIndex = 1;

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
    // autoShowSlides();
    showOwlSlides();
}

function autoShowSlides() {
    setInterval(() => {
        showSlides(++slideIndex);
    }, 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function owlSlide(n) {
    owlIndex = n;
    showOwlSlides();
}

function showSlides(n) {
    if (n > introContainer.length) slideIndex = 1;
    if (n < 1) slideIndex = introContainer.length;
    for (let i = 0; i < introContainer.length; i++) {
        introContainer[i].classList.remove('visible');
        dots[i].classList.remove('here');
    }

    introContainer[slideIndex - 1].style.setProperty('--img', `url(/images/${slideIndex}.jpg)`);
    introContainer[slideIndex - 1].classList.add('visible');
    dots[slideIndex - 1].classList.add('here');
}

function showOwlSlides() {
    for (let i = 0; i < owlPages.length; i++) {
        owlPages[i].classList.remove('owl-active');
    }

    owlPages[owlIndex - 1].classList.add('owl-active');

    const owlActive = document.querySelector('.owl-active');
    if (owlActive.classList.contains('owl-control-two')) {
        owlRowOne.className = 'owl-row owl-row-one right-to-left';
        owlRowTwo.className = 'owl-row owl-row-two right-to-left';
    } else if (owlActive.classList.contains('owl-control-one')) {
        owlRowOne.className = 'owl-row owl-row-one left-to-right';
        owlRowTwo.className = 'owl-row owl-row-two left-to-right';
    }
}

function burgerActive() {
    burgerButton.addEventListener('click', () => {
        navbarUL.classList.toggle('burger-active');
    })
}

function displayInfoContainer() {
    btnMoreInfo.addEventListener('click', () => {
        moreInfoContainer.classList.add('display');
        moreInfoInsideContainer.classList.remove('close');
    })
}

function closeInfoContainer() {
    btnClose.addEventListener('click', () => {
        moreInfoInsideContainer.classList.add('close');
        setTimeout(() => {
            moreInfoContainer.classList.remove('display');
        }, 500);
    })
}

function resizeScreen() {
    window.addEventListener("resize", () => {
        if (document.body.clientWidth) {
            navbarUL.classList.remove('burger-active');
        }
    })
}