const hamburger = document.querySelector(".js-hamburger");
const overlay = document.querySelector(".js-overlay");
const close = document.querySelector(".js-close");
const body = document.querySelector(".js-body");
const accordionButtons = document.querySelectorAll(".js-accordion-btn");
const accWrapper = document.querySelectorAll(".js-acc-wrapper");

// Display overlay menu
hamburger.addEventListener("click",()=>{
    body.classList.add("body--scrollDisabled");
    overlay.classList.toggle("header__overlay--active");
})

// Closes overlay menu
close.addEventListener("click",()=>{
    body.classList.remove("body--scrollDisabled");
    overlay.classList.remove("header__overlay--active");
})

// SWIPPER 
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".js-next",
      prevEl: ".js-prev",
    },
  });

  // Accordion
accordionButtons.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    let wrapper = btn.parentElement;
    wrapper.classList.toggle("accordion__wrapper--opens");
  })
})


