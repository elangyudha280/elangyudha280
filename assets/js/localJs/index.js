

// code aos js

AOS.init({
  duration:700,
  offset:300
})





// swipper programing
const swiper = new Swiper(".swipper-programing", {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  // swipper phtograpy
  const swiperPhotgrapy = new Swiper(".swipper-photography", {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
     
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });