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
