/*header*/

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitems.classList.remove('active');
};


let cartitems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitems.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');


}
/*header*/

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3, // Display three slides per view
  spaceBetween: 25,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    556:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    },
  }
});


