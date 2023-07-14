
const elOver = document.querySelector('.js-overlay')

setTimeout(() => {
    elOver.classList.add('hidden')
    document.body.classList.remove('y')
}, 5000);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true
    },
    loop: true
});
