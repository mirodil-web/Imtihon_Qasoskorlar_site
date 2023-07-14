// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "progressbar",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        // clickable: true,
        type: "progressbar"
    },
});
  