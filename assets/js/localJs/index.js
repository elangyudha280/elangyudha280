

// code for jumbotron slider
let swiper1 = new Swiper(".swiper-jumbotron", {
  grabCursor: true,
});



var swiperCatalog = new Swiper(".swipper-card-catalog", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor:true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});