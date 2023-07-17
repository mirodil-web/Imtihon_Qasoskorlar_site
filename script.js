
const elOver = document.querySelector('.js-overlay')
setTimeout(() => {
    elOver.classList.add('hidden')
    document.body.classList.remove('y')
}, 5000);

const elBtn = document.querySelector('.js-btn')
const elMeniu = document.querySelector('.js-meniu')
const elExit = document.querySelector('.js-exit')


elBtn.addEventListener('click', function () {
    elMeniu.classList.remove('hidden')
})
elExit.addEventListener('click', function () {
    elMeniu.classList.add('hidden')
})


//----------------------- Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,

    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        340: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    loop: true
});
