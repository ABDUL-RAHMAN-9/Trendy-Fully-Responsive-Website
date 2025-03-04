const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector(".menu");
const toggleMenu = () => {
    menu.classList.toggle("active");
};

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);

document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
    .querySelectorAll("menu a")
    .forEach(link => link.addEventListener("click"), toggleMenu);

// FAQ
function toggleAccordion(accordionId) {
    const accordionItem = document.getElementById(accordionId);
    const answer = accordionItem.querySelector(".answer");
    const arrow = accordionItem.querySelector(".fas");
    const isActive = accordionItem.classList.toggle("acitve");

    answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : "0";
    arrow.className = isActive ? "fas fa-minus" : "fas fa-plus";
}
