const introContainer = [...document.querySelectorAll('.intro-container')];
const dots = [...document.querySelectorAll('.intro-dot')];
const burgerButton = document.querySelector('.burger');
const navbarUL = document.querySelector('.navbar-ul');

var slideIndex = 1;

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    showSlides(slideIndex);
    burgerActive();
    resizeScreen();
    // setInterval(() => {
    //     showSlides(++slideIndex);
    // }, 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
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

function burgerActive() {
    burgerButton.addEventListener('click', () => {
        navbarUL.classList.toggle('burger-active');
    })
}

function resizeScreen() {
    window.addEventListener("resize", function (event) {
        if (document.body.clientWidth) {
            navbarUL.classList.remove('burger-active');
        }
    })
}