// script.js

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// SLIDESHOW
let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    if (index >= slides.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].style.display = "block";
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

showSlide(currentSlide);

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        changeSlide(1);
    }

    if (event.key === "ArrowLeft") {
        changeSlide(-1);
    }

});