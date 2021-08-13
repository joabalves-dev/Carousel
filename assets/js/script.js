let slideIndex = 0;

(() => {
    showslides(slideIndex);
})()

function showslides(n, position ='left') {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let animation = position == 'left' ? 'fade-left' : 'fade-right';

    if (n > slides.length - 1) {
        slideIndex = 0
    };
    if (n < 0) {
        slideIndex = slides.length - 1
    };

    slides.forEach(s => {
        s.style.display = 'none';
        s.classList.remove('fade-left');
        s.classList.remove('fade-right');
    });
    dots.forEach(d => d.classList.remove('active'));

    slides[slideIndex].setAttribute('style', 'display: block');
    slides[slideIndex].classList.add(animation);
    dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    showslides(slideIndex = n);
}

function plusSlide(event, n ,position) {
    event.preventDefault();
    showslides(slideIndex += n,position);
}