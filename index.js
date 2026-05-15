
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


const heroImage = document.querySelector(".hero img");

heroImage.addEventListener("mouseover", () => {
    heroImage.style.transform = "scale(1.05)";
    heroImage.style.transition = "0.6s";
});

heroImage.addEventListener("mouseout", () => {
    heroImage.style.transform = "scale(1)";
});


const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.boxShadow = "0 20px 35px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.06)";
    });

});

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        image.style.transform = "scale(1.15)";
        image.style.transition = "0.4s";

        setTimeout(() => {
            image.style.transform = "scale(1)";
        }, 500);

    });

});

const sections = document.querySelectorAll(
    ".hero, .about, .menu-section, .sidebar"
);

window.addEventListener("scroll", revealSections);

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "0.8s";

        }

    });

}

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
});

revealSections();
const logo = document.querySelector(".hero-text h2");

setInterval(() => {

    logo.style.opacity = "0.7";

    setTimeout(() => {
        logo.style.opacity = "1";
    }, 600);

}, 1500);