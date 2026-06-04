// =========================
// SCRIPT.JS
// Håndterer interaksjon på nettsiden
// =========================


// =========================
// MOBILE MENU
// Åpner/lukker mobilmeny
// =========================

// Henter menyknappen fra HTML (hamburger-ikon)
const menuBtn = document.getElementById("menu-btn");

// Henter navigasjonslenkene
const navLinks = document.querySelector(".nav-links");

// Når brukeren klikker på menyknappen
menuBtn.addEventListener("click", () => {

  // Legger til eller fjerner "active"-klassen
  navLinks.classList.toggle("active");
});


// =========================
// SLIDESHOW
// Bildekarusell-funksjonalitet
// =========================

// Holder styr på hvilket bilde som vises
let currentSlide = 0;

// Henter alle slides fra HTML
const slides = document.querySelectorAll(".slide");

// Viser riktig slide basert på index
function showSlide(index) {

    // Skjuler alle slides først
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Hvis vi går forbi siste slide → start på nytt
    if (index >= slides.length) {
        currentSlide = 0;
    }

    // Hvis vi går før første slide → gå til siste
    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    // Viser den aktive slide-en
    slides[currentSlide].style.display = "block";
}

// Endrer slide basert på retning (1 eller -1)
function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Viser første slide ved start
showSlide(currentSlide);


// =========================
// KEYBOARD NAVIGATION
// Bruk piltaster for slideshow
// =========================

// Lytter etter tastetrykk
document.addEventListener("keydown", function(event) {

    // Høyre pil → neste slide
    if (event.key === "ArrowRight") {
        changeSlide(1);
    }

    // Venstre pil → forrige slide
    if (event.key === "ArrowLeft") {
        changeSlide(-1);
    }

});