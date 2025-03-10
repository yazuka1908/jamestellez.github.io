document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
