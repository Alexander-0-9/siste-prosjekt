// script.js

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// SLIDESHOW

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide() {

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[currentSlide].classList.add("active");

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
}

setInterval(showSlide, 3000);