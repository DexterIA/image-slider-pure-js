let slideNow = 1,
    translateWidth = 0,
    slideCount,
    slidewrapperElem,
    viewportWidth;

document.addEventListener('DOMContentLoaded', () => {
    slideCount = document.querySelectorAll('.slide').length;

    let nextBtn = document.getElementsByClassName('next-btn')[0],
        prevBtn = document.getElementsByClassName('prev-btn')[0];

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    slidewrapperElem = document.getElementsByClassName('slidewrapper')[0];
    viewportWidth = document.getElementsByClassName('viewport')[0].offsetWidth;
});

function nextSlide() {
    if (slideNow < slideCount) {
        translateWidth = -viewportWidth * slideNow;
        slidewrapperElem.style.transform = `translateX(${translateWidth}px)`;
        slideNow++;
    } else {
        slidewrapperElem.style.transform = 'translateX(0)';
        slideNow = 1;
    }
}

function prevSlide() {
    if (slideNow <= 1 || slideNow > slideCount) {
        translateWidth = -viewportWidth * (slideCount - 1);
        slidewrapperElem.style.transform = `translateX(${translateWidth}px)`;
        slideNow = slideCount;
    } else {
        translateWidth = -viewportWidth * (slideNow - 2);
        slidewrapperElem.style.transform = `translateX(${translateWidth}px)`;
        slideNow--;
    }
}