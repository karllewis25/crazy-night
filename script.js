// Animation entrée
gsap.from(".title", {
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".question", {
    opacity: 0,
    duration: 2,
    delay: 0.5
});

// Bouton NON qui fuit
function moveButton() {
    const button = document.querySelector(".no");

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    button.style.transform = `translate(${x}px, ${y}px)`;
}

// Bouton OUI
function yesClick() {
    document.getElementById("message").classList.remove("hidden");

    gsap.from("#message h2", {
        scale: 0,
        duration: 1
    });
}
