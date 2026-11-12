
// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Royal Taste Restaurant!");
});

// Smooth navigation
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigation clicked!");
    });
});

// Food card animation
const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transition = "0.3s";
    });
});

// Current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "© " + new Date().getFullYear() +
        " Royal Taste Restaurant. All Rights Reserved.";
}
